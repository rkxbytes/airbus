var mysql = require('mysql');
var connection = mysql.createPool({
 connectionLimit: 100,
 host:'firstdb.c9jx9imv56i2.us-east-1.rds.amazonaws.com',
 user:'root',
 password:'eternal14',
 database:'airbus',
 port: 3306,
 debug: false,
 multipleStatements: true,
 queueLimit: 300000,
 acquireTimeout: 1000000
});
module.exports.connection = connection;


//AWS mysql db connection
//mysql -h firstdb.c9jx9imv56i2.us-east-1.rds.amazonaws.com -P 3306 -u root -p

