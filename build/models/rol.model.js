"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarRolPorId = exports.actualizarRol = exports.insertarRol = exports.buscarRolPorId = exports.buscarRol = void 0;
const db_config_1 = __importDefault(require("./db.config"));
const buscarRol = () => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query("select * from rol", (err, res) => {
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
exports.buscarRol = buscarRol;
const buscarRolPorId = (id) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`select * from rol where idRol = ${id}`, (err, res) => {
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
exports.buscarRolPorId = buscarRolPorId;
const insertarRol = (rol) => {
    console.log(rol);
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`call insertRol(
        '${rol.nombre}',
        '${rol.descripcion}'
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
exports.insertarRol = insertarRol;
const actualizarRol = (rol) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`call updateRol(
        ${rol.idRol},
        '${rol.nombre}',
        '${rol.descripcion}'
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
exports.actualizarRol = actualizarRol;
const eliminarRolPorId = (id) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`Delete from rol where idRol = ${id}`, (err, res) => {
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
exports.eliminarRolPorId = eliminarRolPorId;
