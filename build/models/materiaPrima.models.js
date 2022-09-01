"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarMateriaPrimaPorId = exports.actualizarMateriaPrima = exports.insertarMateriaPrima = exports.buscarMateriaPrimaPorId = exports.buscarMateriaPrima = void 0;
const db_config_1 = __importDefault(require("./db.config"));
const buscarMateriaPrima = () => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query("Select * from materiaprima", (err, res) => {
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
exports.buscarMateriaPrima = buscarMateriaPrima;
const buscarMateriaPrimaPorId = (id) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`Select * from materiaprima where idMateriaPrima =${id}`, (err, res) => {
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
exports.buscarMateriaPrimaPorId = buscarMateriaPrimaPorId;
const insertarMateriaPrima = (materiaPrima) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`call insertMateriaprima(
      '${materiaPrima.nombre}',
      '${materiaPrima.descripcion}',
      ${materiaPrima.unidades},
      ${materiaPrima.valor}
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
exports.insertarMateriaPrima = insertarMateriaPrima;
const actualizarMateriaPrima = (materiaPrima) => {
    return new Promise((resolve, reject) => {
        console.log(`call updateMateriaPrima(
      ${materiaPrima.idMateriaPrima},
      '${materiaPrima.nombre}',
      '${materiaPrima.descripcion}',
      ${materiaPrima.unidades},
      ${materiaPrima.valor}
     )`);
        db_config_1.default.query(`call updateMateriaPrima(
       ${materiaPrima.idMateriaPrima},
       '${materiaPrima.nombre}',
       '${materiaPrima.descripcion}',
       ${materiaPrima.unidades},
       ${materiaPrima.valor}
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
exports.actualizarMateriaPrima = actualizarMateriaPrima;
const eliminarMateriaPrimaPorId = (id) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`Delete from materiaprima where idMateriaPrima = ${id}`, (err, res) => {
            let response = {};
            if (err) {
                response = Object.assign(Object.assign({}, response), { error: 400, mensaje: 'error' });
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
