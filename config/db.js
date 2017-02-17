const mysql = require('mysql');

module.exports = function(server) {
	server.db = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'g5427976',
		database: 'portal_noticias'
	});
	return server;
}