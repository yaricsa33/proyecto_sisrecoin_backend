"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const dbConn = mysql_1.default.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b30b93de0a6759',
    password: 'aeac3392',
    database: 'heroku_5cf0b9d8e1b28bb'
});
dbConn.connect(function (err) {
    if (err)
        throw err;
    console.log("Base de datos conectada");
});
dbConn.query('SELECT 1 + 1 AS solution', function (error, results) {
    if (error)
        throw error;
    console.log('The solution is: ', results[0].solution);
});
exports.default = dbConn;
