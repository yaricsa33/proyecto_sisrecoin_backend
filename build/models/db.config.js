"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const dbConn = mysql_1.default.createConnection({
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
setInterval(function () {
    dbConn.query('SELECT 1');
}, 5000);
exports.default = dbConn;
