import mysql from 'mysql';

const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Andres9712.',
  database: 'sisrecoin'
});

dbConn.connect(function (err: any) {
  if (err) throw err;
  console.log("Base de datos conectada");
});

export default dbConn;