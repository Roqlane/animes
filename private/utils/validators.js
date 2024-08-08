const {body, validationResult} = require('express-validator')
const {connection} = require('./database')
var jwt = require('jsonwebtoken');

const loginValidator = () => [
    body('username').trim().isLength({min: 4, max: 40}).escape(),
    body('password').isLength({min: 8}).escape(),
]

const signinValidator = () => [
    body('username').trim().isLength({min: 4, max: 40})
    .withMessage('La taille du pseudo n\'est pas comprise entre 4 et 40 caractères')
    .escape()
    .custom(name => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT username FROM users WHERE username=?", [name], (err, result) =>  {
                if (err) reject(err)
                if (result.length !== 0) reject('Pseudo déjà pris.')
                else resolve()
            })

        })
    }),
    body('password', 'La taille du mot de passe est plus petite que 8').isLength({min: 8}).escape(),
    body('email', 'Le format de l\'email est incorrect ')
    .trim()
    .normalizeEmail()
    .isEmail()
    .escape(),
    body('passwordConfirmation', 'Les mots de passes sont différents').exists().notEmpty().custom((value, { req }) => value === req.body.password)

]

const updateValidator = () => {
    return [
        body('username').trim().isLength({min: 4, max: 40})
            .withMessage('La taille du pseudo n\'est pas comprise entre 4 et 40 caractères')
            .escape()
            .custom((name, { req }) => {
                return new Promise((resolve, reject) => {
                    const data = jwt.decode(req.cookies.jwt);
                    if (!data || !data.username) {
                        return reject(new Error('Jeton invalide, veuillez vous identifier'));
                    }
                    if (name === data.username) {
                        resolve();
                    } else {
                        connection.query("SELECT username FROM users WHERE username=?", [name], (err, result) =>  {
                            if (err) return reject(new Error('Erreur dans la base de données'));
                            if (result.length !== 0) return reject(new Error('Pseudo déjà pris.'));
                            resolve();
                        });
                    }
                });
            }),
        body('password', 'La taille du mot de passe est plus petite que 8')
            .isLength({min: 8})
            .escape(),
        body('email', 'Le format de l\'email est incorrect ')
            .trim()
            .normalizeEmail()
            .isEmail()
            .escape(),
        body('passwordConfirmation', 'Les mots de passes sont différents')
            .exists()
            .notEmpty()
            .custom((value, { req }) => value === req.body.password)
    ] 
}

module.exports = {loginValidator, signinValidator, updateValidator}