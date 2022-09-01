"use strict";
exports.__esModule = true;
var mysql_1 = require("mysql");
var dbConn = mysql_1["default"].createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Andres9712.',
    database: 'sisrecoin'
});
dbConn.connect(function (err) {
    if (err)
        throw err;
    console.log("Base de datos conectada");
});
exports["default"] = dbConn;
