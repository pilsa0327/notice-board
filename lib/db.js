var mysql= require('mysql');

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '111111',
    database : 'noticeboard'
});
db.connect();

module.exports =db;