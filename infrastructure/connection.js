const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'Your password',
    database: 'petland_schedule'
});

module.exports = connection;