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
exports.eliminarPermisoPorId = exports.actualizarPermiso = exports.insertarPermiso = exports.buscarPermisoPorId = exports.buscarPermiso = void 0;
var db_config_1 = require("./db.config");
var buscarPermiso = function () {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("Select * from permiso", function (err, res) {
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
exports.buscarPermiso = buscarPermiso;
var buscarPermisoPorId = function (id) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("Select * from permiso where idPermiso = ".concat(id), function (err, res) {
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
exports.buscarPermisoPorId = buscarPermisoPorId;
var insertarPermiso = function (permiso) {
    console.log(permiso);
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("call insertPermiso(\n      '".concat(permiso.nombre, "',\n      '").concat(permiso.descripcion, "',\n      '").concat(permiso.url, "',\n      ").concat(permiso.idRol, "\n      )"), function (err, res) {
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
exports.insertarPermiso = insertarPermiso;
var actualizarPermiso = function (permiso) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("call updatePermiso(\n       ".concat(permiso.idPermiso, ",\n       '").concat(permiso.nombre, "',\n       '").concat(permiso.descripcion, "',\n       '").concat(permiso.url, "',\n       ").concat(permiso.idRol, "\n      )"), function (err, res) {
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
exports.actualizarPermiso = actualizarPermiso;
var eliminarPermisoPorId = function (id) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("Delete from permiso where idPermiso = ".concat(id), function (err, res) {
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
exports.eliminarPermisoPorId = eliminarPermisoPorId;
