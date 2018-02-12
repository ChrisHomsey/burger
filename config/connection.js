var mysql = require('mysql');
var connection;

if (process.ENV.JAWSDB_URL){
	connection = mysql.createConnection(process.ENV.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "burgers_db"
	})
}

connection.connect();
module.exports = connection;