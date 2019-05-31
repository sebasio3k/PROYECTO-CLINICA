var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'clinica'
});

module.exports = connection;