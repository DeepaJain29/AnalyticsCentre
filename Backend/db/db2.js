var connection = require('mysql');

var db2 = connection.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'newrootpassword',
  database: 'covid_pos'
});



// Export an object containing all the database connections
module.exports = db2;