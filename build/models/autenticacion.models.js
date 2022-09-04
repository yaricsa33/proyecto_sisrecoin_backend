"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autenticacion = void 0;
const db_config_1 = __importDefault(require("./db.config"));
const autenticacion = (auth) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`
      select u.idUsuario,u.nombres, u.apellidos,u.idRol, r.nombre as nombreRol
      from usuario u 
      inner join rol r on u.idRol = r.idRol 
      where u.cedula=${auth.cedula} and u.contrasena='${auth.contrasena}'`, (_err, res) => {
            let response = {};
            if (Object.entries(res).length === 0) {
                response = Object.assign(Object.assign({}, response), { error: 400, mensaje: 'usuario o contraseña invalido' });
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
