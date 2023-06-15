
var connection     = require('mysql');
var db = connection.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'newrootpassword',
  database : 'project1'
});

module.exports = db