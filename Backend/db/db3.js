var connection = require('mysql');

var db3 = connection.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'newrootpassword',
    database: 'covid_neg'
});

module.exports = db3;