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
exports.autenticacion = void 0;
var db_config_1 = require("./db.config");
var autenticacion = function (auth) {
    return new Promise(function (resolve, reject) {
        db_config_1["default"].query("\n      select u.idUsuario,u.nombres, u.apellidos,u.idRol, r.nombre as nombreRol\n      from usuario u \n      inner join rol r on u.idRol = r.idRol \n      where u.cedula=".concat(auth.cedula, " and u.contrasena='").concat(auth.contrasena, "'"), function (_err, res) {
            var response = {};
            if (Object.entries(res).length === 0) {
                response = __assign(__assign({}, response), { error: 400, mensaje: 'usuario o contraseña invalido' });
                reject(response);
            }
            else {
                response = { data: res[0], error: 200, mensaje: '' };
                resolve(response);
            }
        });
    });
};
exports.autenticacion = autenticacion;
