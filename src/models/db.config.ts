import mysql from 'mysql';

const dbConn = mysql.createConnection({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'b30b93de0a6759',
  password: 'aeac3392',
  database: 'heroku_5cf0b9d8e1b28bb'
});
dbConn.connect(function (err: any) {
  if (err) throw err;
  console.log("Base de datos conectada");
});

export default dbConn;