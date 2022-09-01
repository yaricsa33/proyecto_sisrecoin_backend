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
exports.eliminarRolPorId = exports.actualizarRol = exports.insertarRol = exports.buscarRolPorId = exports.buscarRol = void 0;
var db_config_1 = require("./db.config");
var buscarRol = function () {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("select * from rol", function (err, res) {
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
exports.buscarRol = buscarRol;
var buscarRolPorId = function (id) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("select * from rol where idRol = ".concat(id), function (err, res) {
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
exports.buscarRolPorId = buscarRolPorId;
var insertarRol = function (rol) {
    console.log(rol);
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("call insertRol(\n        '".concat(rol.nombre, "',\n        '").concat(rol.descripcion, "'\n      )"), function (err, res) {
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
exports.insertarRol = insertarRol;
var actualizarRol = function (rol) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("call updateRol(\n        ".concat(rol.idRol, ",\n        '").concat(rol.nombre, "',\n        '").concat(rol.descripcion, "'\n      )"), function (err, res) {
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
exports.actualizarRol = actualizarRol;
var eliminarRolPorId = function (id) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("Delete from rol where idRol = ".concat(id), function (err, res) {
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
exports.eliminarRolPorId = eliminarRolPorId;
