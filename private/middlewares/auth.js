const express = require("express")
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
dotenv.config()

const app = express()
app.use(cookieParser())

const JWT_SECRET = process.env.JWT_SECRET

function accessAuthentication(req, res, next) {
  const token = req.cookies.jwt; 

  if (!token) {
        return res.redirect('/user/login')
    }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
        return res.redirect('/user/login')
    }

    req.user = user;
    next();
  });
}

function alreadyAuthenticated(req, res, next) {
    jwt.verify(req.cookies.jwt, JWT_SECRET, (err, data) => {
      //abort if authenticated
      if (data) return res.redirect('/user/profile')
      if (err) next()
  })
}


module.exports = {accessAuthentication, alreadyAuthenticated};
