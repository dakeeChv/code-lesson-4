var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost', // database host
  user: 'root', // database user
  password: 'toor', // database password
  database: 'company' // database name
});

// TODO: implement logic

// FIXME: implement logic

db.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

module.exports = db;