const express = require("express")
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const mysql = require("mysql")
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const path = require('path');
const {body, validationResult} = require('express-validator')

const {accessAuthentication, alreadyAuthenticated} = require('./private/middlewares/auth')
const { databaseError, bcryptError } = require('./private/utils/errors')

const app = express()
dotenv.config()

const saltRounds = 10
const JWT_SECRET = process.env.JWT_SECRET

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'meowmeow',
    database: 'animes'
})
connection.connect()


//app.set('view engine', 'ejs')
 
 //middlewares
 app.use(express.static('public'))
 app.use(cookieParser())
 app.use(bodyParser.urlencoded({    
   extended: true
 })); 

/** TEST */
const username = "meow"
const password = "$2b$10$nx01bcEER4lSQK2D/0L.kuflx9oPYVdebq/GYho0770G9wZ8PU/p."
const email = "meow.meow@meow.com"

const user = {
    username: username,
    password: password,
    email: email
}

const userDataValidation = () => [
    body('username').trim().isLength({min: 4, max: 40}).escape(),
    body('password').isLength({min: 8}).escape(),
    body('email').isEmail().trim().escape().normalizeEmail()
]


//main page
app.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'public/html/index.html'))
})

//render the login page that is also the signin page
app.get('/user/login', alreadyAuthenticated, (req, res) => {
    //render the page
    res.sendFile(path.join(__dirname, 'public/html/form.html'))
}) 
//handle the login process
app.post('/user/login', alreadyAuthenticated, userDataValidation(), (req, res) => {
    //retrieve database information with the req body
    const query = "SELECT * from users where username=? LIMIT 1";
    connection.query(query, [req.body.username], (err, result) => {
        if (err) {
            console.error(err)
            res.json("Une erreur est survenue avec la base de donnée. Veuillez réessayer ultérieurement.");
            return
        }

        //check creds
        if (result) {
            const userdId = result[0].id;
            const username = result[0].username;
            const password = result[0].password;
            const email = result[0].email;

            if (bcrypt.compareSync(req.body.password, password)) {
                //retrieve anime cards
                const cardsQuery = "SELECT name FROM cards INNER JOIN users_cards ON cards.id = users_cards.cards_id and users_cards.user_id = ?"
                connection.query(cardsQuery, [userdId], (err, result) => {
                    if (err) {
                        console.error(err)
                        res.json("Une erreur est survenue avec la base de donnée. Veuillez réessayer ultérieurement.");
                        return
                    }
    
                    //create jwt cookie
                    if (result) {
                        const cardsNames = [];
                        for (let i = 0; i < result.length; i++) cardsNames.push(result[i].name)
                        const token = jwt.sign({ 
                            username: username,
                            email: email,
                            animes: cardsNames,
                            
                        }, JWT_SECRET, {expiresIn: "1h"})
                        res.cookie('jwt', token, {maxAge: 3600}).redirect('/user/profile')
                    }
                })
                
            }
            else {
                res.json({error: "Les informations envoyés ne sont pas valides, veuillez réessayer"})
            }
        }
        else {
            res.json({error: "Les informations envoyés ne sont pas valides, veuillez réessayer"})
        }
    })
})

const signinValidator = () => [
    body('username').trim().isLength({min: 4, max: 40}).withMessage('La taille du pseudo n\'est pas comprise entre 4 et 40 caractères')
    .escape().custom(name => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT username FROM users WHERE username=?", [name], (err, result) =>  {
                if (err) reject(err)
                if (result.length !== 0) reject('Pseudo déjà pris.')
                else resolve()
            })

        })
    }),
    body('password', 'La taille du mot de passe est plus petite que 8').isLength({min: 8}).escape(),
    body('email', 'Le format de l\'email est incorrect ').isEmail().trim().escape().normalizeEmail(),
    body('passwordConfirmation', 'Les mots de passes sont différents').exists().custom((value, { req }) => value === req.body.password)

]
//handle the signin process
app.post('/user/signin', alreadyAuthenticated, signinValidator(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    //insert data into database
    hash = bcrypt.hashSync(password, saltRounds)
    const query = "INSERT INTO users(username, password, email) VALUES (?,?,?)"
    connection.query(query, [username, hash, email], (err, result) => {
        if (err) return databaseError(err, res)
        if (result) {
            //create jwt auth cookie
            const token = jwt.sign({ 
                username: username,
                email: email,
                animes: [],
                
            }, JWT_SECRET, {expiresIn: "1h"})
            res.cookie('jwt', token, {maxAge: 3600}).redirect('/user/profile')
        }
    })
})


//render the profile page 
app.get('/user/profile', accessAuthentication, (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/profile.html'))
})

//handle the profile update
app.post('/user/update', accessAuthentication, (req, res) => {
    //if logged in 
        //if correct password

        //update user information

        //modify cookie

    //send error message to the form
    })
    
//to disconnect a user, we just have to remove the jwt cookie
app.get('/user/logout', accessAuthentication, (req, res) => {
    res.clearCookie('jwt')

    res.redirect('/')
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
