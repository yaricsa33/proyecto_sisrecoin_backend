"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuarioPorId = exports.actualizarUsuario = exports.insertarUsuario = exports.buscarUsuariosParaMueble = exports.buscarUsuarioPorId = exports.buscarUsuarios = void 0;
const db_config_1 = __importDefault(require("./db.config"));
const buscarUsuarios = () => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query("Select * from usuario", (err, res) => {
            let response = {};
            if (err) {
                response = Object.assign(Object.assign({}, response), { error: 400, mensaje: 'error' });
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
const buscarUsuarioPorId = (id) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`Select * from usuario where idUsuario = ${id}`, (err, res) => {
            let response = {};
            if (err) {
                response = Object.assign(Object.assign({}, response), { error: 400, mensaje: 'error' });
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
const buscarUsuariosParaMueble = () => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`select 
      u.idUsuario,
      u.nombres,
      u.apellidos,
      r.nombre as nombreRol
      from usuario u
      inner join rol r on u.idRol = r.idRol
      where u.idRol in(2,3)`, (err, res) => {
            let response = {};
            if (err) {
                response = Object.assign(Object.assign({}, response), { error: 400, mensaje: 'error' });
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
const insertarUsuario = (usuario) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`call insertUsuario(
        '${usuario.nombres}',
        '${usuario.apellidos}',
        ${usuario.cedula},
        '${usuario.lugarNacimiento}',
        '${usuario.genero}',
        '${usuario.fechaIngreso}',
        '${usuario.correo}',
        '${usuario.contrasena}',
        ${usuario.celular},
        ${usuario.idRol}
      )`, (err, res) => {
            let response = {};
            if (err) {
                response = Object.assign(Object.assign({}, response), { error: 400, mensaje: 'error' });
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
const actualizarUsuario = (usuario) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`call updateUsuario(
        ${usuario.idUsuario},
        '${usuario.nombres}',
        '${usuario.apellidos}',
        ${usuario.cedula},
        '${usuario.lugarNacimiento}',
        '${usuario.genero}',
        '${usuario.fechaIngreso}',
        '${usuario.correo}',
        '${usuario.contrasena}',
        ${usuario.celular},
        ${usuario.idRol}
      )`, (err, res) => {
            let response = {};
            if (err) {
                response = Object.assign(Object.assign({}, response), { error: 400, mensaje: 'error' });
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
const eliminarUsuarioPorId = (id) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`Delete from usuario where idUsuario = ${id}`, (err, res) => {
            let response = {};
            if (err) {
                response = Object.assign(Object.assign({}, response), { error: 400, mensaje: 'error' });
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
