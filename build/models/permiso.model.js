"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarPermisoPorId = exports.actualizarPermiso = exports.insertarPermiso = exports.buscarPermisoPorIdRol = exports.buscarPermisoPorId = exports.buscarPermiso = void 0;
const db_config_1 = __importDefault(require("./db.config"));
const buscarPermiso = () => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`
      Select 
        p.idPermiso, 
        p.nombre,
        p.descripcion,
        p.idRol,
        p.seccion,
        r.nombre as nombreRol
      from permiso p inner join rol r on p.idRol = r.idRol
    `, (err, res) => {
            let response = {};
            if (err) {
                response = Object.assign(Object.assign({}, response), { error: 400, mensaje: "error" });
                reject(response);
            }
            else {
                response = { data: res, error: 200, mensaje: "exito" };
                resolve(response);
            }
        });
    });
};
exports.buscarPermiso = buscarPermiso;
const buscarPermisoPorId = (id) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`Select * from permiso where idPermiso = ${id}`, (err, res) => {
            let response = {};
            if (err) {
                response = Object.assign(Object.assign({}, response), { error: 400, mensaje: "error" });
                reject(response);
            }
            else {
                response = { data: res[0], error: 200, mensaje: "exito" };
                resolve(response);
            }
        });
    });
};
exports.buscarPermisoPorId = buscarPermisoPorId;
const buscarPermisoPorIdRol = (idRol) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`Select * from permiso where idRol = ${idRol}`, (err, res) => {
            let response = {};
            if (err) {
                response = Object.assign(Object.assign({}, response), { error: 400, mensaje: "error" });
                reject(response);
            }
            else {
                response = { data: res, error: 200, mensaje: "exito" };
                resolve(response);
            }
        });
    });
};
exports.buscarPermisoPorIdRol = buscarPermisoPorIdRol;
const insertarPermiso = (permiso) => {
    console.log(permiso);
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`call insertPermiso(
      '${permiso.nombre}',
      '${permiso.descripcion}',
      'no',
      '${permiso.seccion}',
      ${permiso.idRol}
      )`, (err, res) => {
            let response = {};
            if (err) {
                response = Object.assign(Object.assign({}, response), { error: 400, mensaje: "error" });
                reject(response);
            }
            else {
                response = { data: res, error: 200, mensaje: "exito" };
                resolve(response);
            }
        });
    });
};
exports.insertarPermiso = insertarPermiso;
const actualizarPermiso = (permiso) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`call updatePermiso(
       ${permiso.idPermiso},
       '${permiso.nombre}',
       '${permiso.descripcion}',
       'no',
       '${permiso.seccion}',
       ${permiso.idRol}
      )`, (err, res) => {
            let response = {};
            if (err) {
                response = Object.assign(Object.assign({}, response), { error: 400, mensaje: "error" });
                reject(response);
            }
            else {
                response = { data: res, error: 200, mensaje: "exito" };
                resolve(response);
            }
        });
    });
};
exports.actualizarPermiso = actualizarPermiso;
const eliminarPermisoPorId = (id) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`Delete from permiso where idPermiso = ${id}`, (err, res) => {
            let response = {};
            if (err) {
                response = Object.assign(Object.assign({}, response), { error: 400, mensaje: "error" });
                reject("Error al eliminar");
            }
            else {
                response = { data: res, error: 200, mensaje: "exito" };
                resolve(response);
            }
        });
    });
};
exports.eliminarPermisoPorId = eliminarPermisoPorId;
