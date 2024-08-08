const mysql = require("mysql")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'meowmeow',
    database: 'animes'
})

connection.connect()

module.exports = {connection}