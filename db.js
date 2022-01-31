var mysql = require('mysql');

var db = mysql.createConnection({
  host: '127.0.0.1', // database host
  port: 3306, // database port at 3306
  user: 'root', // database user
  password: 'toor', // database password
  database: 'company' // database name
});

// TODO: implement logic

// FIXME: implement logic

db.connect(function(err) {
  if (err) {
    console.log('Connect Fail', err);
    return;
  }
  console.log('Connection established');
});

module.exports = db;