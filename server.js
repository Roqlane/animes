const express = require("express")
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const path = require('path');
const multer = require("multer");
const fs = require('fs')

const {accessAuthentication, alreadyAuthenticated} = require('./private/middlewares/auth')
const { databaseError, bcryptError } = require('./private/utils/errors')
const {loginValidator, signinValidator, updateValidator} = require('./private/utils/validators')
const {validatorError} = require('./private/middlewares/errors')
const {connection} = require('./private/utils/database');

const app = express()
dotenv.config()
const upload = multer({
    limits: 800000,
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, "public/image/avatars"))
          },
          filename:(req,file,cb)=>{
            const ext = path.extname(file.originalname);
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null,`${uniqueSuffix}${ext}`)
        }
    }),
    fileFilter: (req,file,cb)=>{
        const allowedFileType = ["jpg", "jpeg", "png"];
        if(allowedFileType.includes(file.mimetype.split("/")[1])){
            cb(null,true)
        }else{
            cb(null,false)
        }
    }
})

const saltRounds = 10
const JWT_SECRET = process.env.JWT_SECRET

function CreateToken(username, email, animes, imagePath) {
    return jwt.sign({ 
        username: username,
        email: email,
        animes: animes,
        avatar: imagePath
        
    }, JWT_SECRET, {expiresIn: "1h"})
}




app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "private/views"))
 
 //middlewares
 app.use(express.static('public'))
 app.use(cookieParser())
 app.use(bodyParser.urlencoded({    
   extended: true
 })); 

//main page
app.get('/', (req, res, next) => {
    const token = req.cookies.jwt; 
    if (!token) {
        return res.render('index')
      }
  
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.render('index')
      }
  
      next();
    });
}, (req, res) => {
    res.render('index', {jwt: jwt.decode(req.cookies.jwt)})
})

//render the login page that is also the signin page
app.get('/user/login', alreadyAuthenticated, (req, res) => {
    //render the page
    res.render('form')
}) 
//handle the login process
app.post('/user/login', alreadyAuthenticated, loginValidator(), validatorError,
(err, req, res, next) => {
    if (err) {
        return res.render('form', {error: err})
    }

    next()
},
(req, res) => {
    //retrieve database information with the req body
    const query = "SELECT * from users where username=? LIMIT 1";
    connection.query(query, [req.body.username], (err, result) => {
        if (err) {
            databaseError(err, res)
            return
        }

        //check creds
        if (result.length !== 0) {
            const userdId = result[0].id;
            const username = result[0].username;
            const password = result[0].password;
            const email = result[0].email;
            const path = result[0].imagePath;

            if (bcrypt.compareSync(req.body.password, password)) {
                //retrieve anime cards
                const cardsQuery = "SELECT name FROM cards INNER JOIN users_cards ON cards.id = users_cards.cards_id and users_cards.user_id = ?"
                connection.query(cardsQuery, [userdId], (err, result) => {
                    if (err) {
                        databaseError(err, res)
                        return
                    }
    
                    //create jwt cookie
                    if (result) {
                        const cardsNames = [];
                        for (let i = 0; i < result.length; i++) cardsNames.push(result[i].name)
                        const token = CreateToken(username, email, cardsNames, path)
                        res.cookie('jwt', token, {maxAge: 3600000, httpOnly: true}).redirect('/user/profile')
                    }
                })
                
            }
            else {
                res.render('form', {error: ["Les informations envoyés ne sont pas valides, veuillez réessayer."]})
            }
        }
        else {
            res.render('form', {error: ["Les informations envoyés ne sont pas valides, veuillez réessayer."]})
        }
    })
})


//handle the signin process
app.post('/user/signin', alreadyAuthenticated, signinValidator(), validatorError,
(err, req, res, next) => {
    if (err) {
        return res.render('form', {error: err, signin: true,
            signUsername: req.body.username, signEmail: req.body.email, signPassword: req.body.password, signPasswordConfirmation: req.body.passwordConfirmation
        })
    }

    next()
},
 (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    //insert data into database
    hash = bcrypt.hashSync(password, saltRounds)
    const query = "INSERT INTO users(username, password, email, imagePath) VALUES (?,?,?, '')"
    connection.query(query, [username, hash, email], (err, result) => {
        if (err) return databaseError(err, res)
        if (result) {
            //create jwt auth cookie
            const token = CreateToken(username, email, [], "")
            res.cookie('jwt', token, {maxAge: 3600000, httpOnly: true}).redirect('/user/profile')
        }
    })
})


//render the profile page 
app.get('/user/profile', accessAuthentication, (req, res) => {
    const data = jwt.decode(req.cookies.jwt)
    res.render('profile', {jwt: data})
})


//handle the profile update
app.post('/user/update', accessAuthentication, updateValidator(), validatorError, 
(err, req, res, next) => {
    //render the page in case there are errors in the data sent
    if (err) {
        const token = jwt.decode(req.cookies.jwt)
        return res.render('profile', {jwt: token, error: err})
    }
    
    next()
},
(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const userData = jwt.decode(req.cookies.jwt);

    //insert data into database
    hash = bcrypt.hashSync(password, saltRounds)
    const query = "UPDATE users SET username = ?, password = ?, email = ? WHERE username = ?"
    connection.query(query, [username, hash, email, userData.username], (err, result) => {
        if (err) return databaseError(err, res)
        if (result) {
            //create jwt auth cookie
            const token = CreateToken(username, email, userData.animes, userData.avatar)
            res.cookie('jwt', token, {maxAge: 3600000}).render('profile', {jwt: token, result: "Le profil a été mis à jour."})
        }
    })
})

//handle user profile image
app.post('/user/image', accessAuthentication, upload.single('avatar'), 
(err, req, res, next) => {
    const userData = jwt.decode(req.cookies.jwt)
    if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        console.log(err)
        res.render('profile', {jwt: userData, error: ["Le fichier n'est pas valide !"]})
    } else if (err) {
        // An unknown error occurred when uploading.
        res.render('profile', {jwt: userData, error: ["Quelque chose s'est mal passé, veuillez réessayer ultérieurement."]})
    }
    else {
        next()
    }
},
(req, res) => {     
    const userData = jwt.decode(req.cookies.jwt)
    if (!req.file) {
        console.error('File refused')
        return res.render('profile', {jwt: userData, error: ["Le fichier n'est pas valide !"]});
    }

    console.log("file uploaded with filename", req.file.filename)

    //remove previous image from storage
    if (userData.avatar !== '') {
        try {
            fs.unlinkSync(path.join(__dirname, "public/image/avatars", userData.avatar))
            console.log(`File ${path.join(__dirname, "public/image/avatars", userData.avatar)} successfully deleted.`)
        } catch (error) {
            console.error(error)
        }
    }

    //update path
    const query = "UPDATE users SET imagePath = ? WHERE username = ?"
    connection.query(query, [req.file.filename, userData.username], (err, result) => {
        if (err) return databaseError(err, res);
        if (result) {
            //update jwt
            const token = CreateToken(userData.username, userData.email, userData.animes, req.file.filename)
            res.cookie('jwt', token, {maxAge: 3600000}).render('profile', {jwt: jwt.decode(token), result: "Le fichier a été envoyé."})
        }
    })

})
    
//to disconnect a user, we just have to remove the jwt cookie
app.get('/user/logout', accessAuthentication, (req, res) => {
    res.clearCookie('jwt').redirect('/')
})

//add a card to the user list
app.get('/cards/add/:name', accessAuthentication, (req, res) => {
    //check if cardName is not already in list
    const userData = jwt.decode(req.cookies.jwt);
    const cardName = req.params.name;
    if (userData.animes.includes(cardName)) return res.status(500).send('Name already in');

    try {
        connection.query("SELECT name from cards", (err, cardsName) => {
            if (cardsName) {
                for (let i = 0; i < cardsName.length; i++) {
                    //check if the card name is valid
                    if (cardsName[i].name === cardName) {
                        console.log('found', cardName)
                        userData.animes.push(cardName);
                        i = cardsName.length;
                        //update db
                        connection.query("SELECT id from users where username=? UNION SELECT id from cards WHERE name=?", [userData.username, cardName], (err, ids) => {
                            const userId = ids[0].id;
                            const cardId = ids[1].id;
                            connection.query("INSERT INTO users_cards (user_id, cards_id) VALUES (?, ?)", [userId, cardId])
                        })
                    }
                }
    
                //update jwt
                const token = CreateToken(userData.username, userData.email, userData.animes, userData.avatar)
                res.cookie('jwt', token, {maxAge: 3600000}).send("Added")
            }
        })
        
    } catch (error) {
        return databaseError(err, res);
    }

})

//delete a card from a user list
app.get('/cards/delete/:name', accessAuthentication, (req, res) => {
    const cardName = req.params.name;
    const userData = jwt.decode(req.cookies.jwt);

    //update db
    try { 
        connection.query("SELECT id from users where username=? UNION SELECT id from cards WHERE name=?", [userData.username, cardName], (err, ids) => {
            const userId = ids[0].id;
            const cardId = ids[1].id;
            connection.query("DELETE FROM users_cards WHERE user_id=? AND cards_id=?", [userId, cardId])
        })
    } catch (error) {
        return databaseError(err, res)
    }
    
    //update jwt
    const token = CreateToken(userData.username, userData.email, userData.animes.filter(e => e !== cardName), userData.avatar)
    console.log("Updated. Name:", cardName, userData.animes)
    res.cookie('jwt', token, {maxAge: 3600000}).send("Deleted if found")
})

//404 handler
app.use((req, res, next) => {
    res.status(404).send("Cette page n'existe pas")
})

//500 handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Quelque chose a planté')
})

//launch the app
app.listen(port = 3000, () => {
    console.log(`url: http://localhost:${port}/`)
})
