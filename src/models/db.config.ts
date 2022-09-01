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

dbConn.query('SELECT 1 + 1 AS solution', function (error, results) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

export default dbConn;