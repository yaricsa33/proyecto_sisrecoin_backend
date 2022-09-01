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
exports.eliminarUsuarioPorId = exports.actualizarUsuario = exports.insertarUsuario = exports.buscarUsuariosParaMueble = exports.buscarUsuarioPorId = exports.buscarUsuarios = void 0;
var db_config_1 = require("./db.config");
var buscarUsuarios = function () {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("Select * from usuario", function (err, res) {
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
exports.buscarUsuarios = buscarUsuarios;
var buscarUsuarioPorId = function (id) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("Select * from usuario where idUsuario = ".concat(id), function (err, res) {
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
exports.buscarUsuarioPorId = buscarUsuarioPorId;
var buscarUsuariosParaMueble = function () {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("select \n      u.idUsuario,\n      u.nombres,\n      u.apellidos,\n      r.nombre as nombreRol\n      from usuario u\n      inner join rol r on u.idRol = r.idRol\n      where u.idRol in(2,3)", function (err, res) {
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
exports.buscarUsuariosParaMueble = buscarUsuariosParaMueble;
var insertarUsuario = function (usuario) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("call insertUsuario(\n        '".concat(usuario.nombres, "',\n        '").concat(usuario.apellidos, "',\n        ").concat(usuario.cedula, ",\n        '").concat(usuario.lugarNacimiento, "',\n        '").concat(usuario.genero, "',\n        '").concat(usuario.fechaIngreso, "',\n        '").concat(usuario.correo, "',\n        '").concat(usuario.contrasena, "',\n        ").concat(usuario.celular, ",\n        ").concat(usuario.idRol, "\n      )"), function (err, res) {
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
exports.insertarUsuario = insertarUsuario;
var actualizarUsuario = function (usuario) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("call updateUsuario(\n        ".concat(usuario.idUsuario, ",\n        '").concat(usuario.nombres, "',\n        '").concat(usuario.apellidos, "',\n        ").concat(usuario.cedula, ",\n        '").concat(usuario.lugarNacimiento, "',\n        '").concat(usuario.genero, "',\n        '").concat(usuario.fechaIngreso, "',\n        '").concat(usuario.correo, "',\n        '").concat(usuario.contrasena, "',\n        ").concat(usuario.celular, ",\n        ").concat(usuario.idRol, "\n      )"), function (err, res) {
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
exports.actualizarUsuario = actualizarUsuario;
var eliminarUsuarioPorId = function (id) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("Delete from usuario where idUsuario = ".concat(id), function (err, res) {
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
exports.eliminarUsuarioPorId = eliminarUsuarioPorId;
