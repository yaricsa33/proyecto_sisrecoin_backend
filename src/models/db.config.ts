import mysql from 'mysql';

const dbConn = mysql.createPool({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'b30b93de0a6759',
  password: 'aeac3392',
  database: 'heroku_5cf0b9d8e1b28bb'
});
// dbConn.connect(function (err: any) {
//   if (err) throw err;
//   console.log("Base de datos conectada");
// });

// dbConn.query('SELECT 1 + 1 AS solution', function (error, results) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

export default dbConn;