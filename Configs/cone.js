const mysql = require('mysql2');
const data = require('./conf')

const mysqlConnection = mysql.createConnection({
  host: data.host,
  user: data.user,
  password: data.password,
  database: data.database,
  port: data.port,
  insecureAuth : true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('Conexion a la db completa');
  }
});

module.exports = mysqlConnection;