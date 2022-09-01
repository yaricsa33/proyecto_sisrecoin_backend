"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.eliminarMateriaPrimaPorId = exports.actualizarMateriaPrima = exports.insertarMateriaPrima = exports.buscarMateriaPrimaPorId = exports.buscarMateriaPrima = void 0;
var db_config_1 = require("./db.config");
var buscarMateriaPrima = function () {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("Select * from materiaprima", function (err, res) {
            var response = {};
            if (err) {
                response = __assign(__assign({}, response), { error: 400, mensaje: 'error' });
                reject(response);
            }
            else {
                response = { data: res, error: 200, mensaje: 'exito' };
                resolve(response);
            }
        });
    });
};
exports.buscarMateriaPrima = buscarMateriaPrima;
var buscarMateriaPrimaPorId = function (id) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("Select * from materiaprima where idMateriaPrima =".concat(id), function (err, res) {
            var response = {};
            if (err) {
                response = __assign(__assign({}, response), { error: 400, mensaje: 'error' });
                reject(response);
            }
            else {
                response = { data: res[0], error: 200, mensaje: 'exito' };
                resolve(response);
            }
        });
    });
};
exports.buscarMateriaPrimaPorId = buscarMateriaPrimaPorId;
var insertarMateriaPrima = function (materiaPrima) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("call insertMateriaprima(\n      '".concat(materiaPrima.nombre, "',\n      '").concat(materiaPrima.descripcion, "',\n      ").concat(materiaPrima.unidades, ",\n      ").concat(materiaPrima.valor, "\n    )"), function (err, res) {
            var response = {};
            if (err) {
                response = __assign(__assign({}, response), { error: 400, mensaje: 'error' });
                reject(response);
            }
            else {
                response = { data: res, error: 200, mensaje: 'exito' };
                resolve(response);
            }
        });
    });
};
exports.insertarMateriaPrima = insertarMateriaPrima;
var actualizarMateriaPrima = function (materiaPrima) {
    return new Promise(function (resolve, reject) {
        console.log("call updateMateriaPrima(\n      ".concat(materiaPrima.idMateriaPrima, ",\n      '").concat(materiaPrima.nombre, "',\n      '").concat(materiaPrima.descripcion, "',\n      ").concat(materiaPrima.unidades, ",\n      ").concat(materiaPrima.valor, "\n     )"));
        db_config_1["default"].query("call updateMateriaPrima(\n       ".concat(materiaPrima.idMateriaPrima, ",\n       '").concat(materiaPrima.nombre, "',\n       '").concat(materiaPrima.descripcion, "',\n       ").concat(materiaPrima.unidades, ",\n       ").concat(materiaPrima.valor, "\n      )"), function (err, res) {
            var response = {};
            if (err) {
                response = __assign(__assign({}, response), { error: 400, mensaje: 'error' });
                reject(response);
            }
            else {
                response = { data: res, error: 200, mensaje: 'exito' };
                resolve(response);
            }
        });
    });
};
exports.actualizarMateriaPrima = actualizarMateriaPrima;
var eliminarMateriaPrimaPorId = function (id) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("Delete from materiaprima where idMateriaPrima = ".concat(id), function (err, res) {
            var response = {};
            if (err) {
                response = __assign(__assign({}, response), { error: 400, mensaje: 'error' });
                reject('Error al eliminar');
            }
            else {
                response = { data: res, error: 200, mensaje: 'exito' };
                resolve(response);
            }
        });
    });
};
exports.eliminarMateriaPrimaPorId = eliminarMateriaPrimaPorId;
