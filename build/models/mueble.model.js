"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarMueblePorId = exports.actualizarMueble = exports.insertarMuebleMateriaPrima = exports.insertarMuebleUsuario = exports.insertarMuebleListados = exports.insertarMueble = exports.buscarMateriasPrimasAsignadosMueble = exports.buscarUsuariosAsignadosMueble = exports.buscarMueblePorId = exports.buscarMueble = void 0;
const db_config_1 = __importDefault(require("./db.config"));
const buscarMueble = () => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query("Select * from mueble", (err, res) => {
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
exports.buscarMueble = buscarMueble;
const buscarMueblePorId = (id) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`Select * from mueble where idMueble =${id}`, (err, res) => {
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
exports.buscarMueblePorId = buscarMueblePorId;
const buscarUsuariosAsignadosMueble = (id) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`
      select u.idUsuario,u.nombres, u.apellidos,r.nombre as nombreRol,mu.valor 
      from muebleusuario mu 
      inner join usuario u  on u.idUsuario = mu.idUsuario
      inner join rol r on r.idRol = u.idRol
      where mu.idMueble = ${id}`, (err, res) => {
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
exports.buscarUsuariosAsignadosMueble = buscarUsuariosAsignadosMueble;
const buscarMateriasPrimasAsignadosMueble = (id) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`
      SELECT  mp.idMateriaPrima,mp.nombre,mp.valor,mp.unidades,mmp.unidades as unidadesDisponibles
      FROM materiaprima mp 
      inner join mueblemateriaprima mmp on mp.idMateriaPrima = mmp.idMateriaPrima
      where mmp.idMueble = ${id}`, (err, res) => {
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
exports.buscarMateriasPrimasAsignadosMueble = buscarMateriasPrimasAsignadosMueble;
const insertarMueble = (mueble) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`call insertmueble(
      '${mueble.nombre}',
      '${mueble.descripcion}',
      '${mueble.nombreCliente}',
      ${mueble.costoMateriaPrima},
      '${mueble.fechaEstimadaEntrega}',
      ${mueble.tipo},
      '${mueble.fechaFabricacion}',
      ${mueble.estado},
      ${mueble.idUsuario}
    )`, (err, res) => {
            let response = {};
            if (err) {
                response = Object.assign(Object.assign({}, response), { error: 400, mensaje: 'error' });
                reject(response);
            }
            else {
                response = { data: res[0][0], error: 200, mensaje: 'exito' };
                resolve(response);
            }
        });
    });
};
exports.insertarMueble = insertarMueble;
const insertarMuebleListados = (listados) => {
    return new Promise((resolve, _reject) => __awaiter(void 0, void 0, void 0, function* () {
        for (let i = 0; i < listados.usuarios.length; i++) {
            yield (0, exports.insertarMuebleUsuario)(listados.usuarios[i], listados.idMueble);
        }
        for (let i = 0; i < listados.materiaPrima.length; i++) {
            yield (0, exports.insertarMuebleMateriaPrima)(listados.materiaPrima[i], listados.idMueble);
        }
        let response = {};
        response = { data: null, error: 200, mensaje: 'exito' };
        resolve(response);
    }));
};
exports.insertarMuebleListados = insertarMuebleListados;
const insertarMuebleUsuario = (muebleUsuario, idMueble) => {
    db_config_1.default.query(`call insertMuebleUsuario(
    ${idMueble},
    ${muebleUsuario.idUsuario},
    ${muebleUsuario.valor}
  )`, (err, res) => {
        console.log('res', res);
        console.log('err', err);
    });
};
exports.insertarMuebleUsuario = insertarMuebleUsuario;
const insertarMuebleMateriaPrima = (muebleMateriaPrima, idMueble) => {
    db_config_1.default.query(`call insertMuebleMateriaPrima(
      ${idMueble},
      ${muebleMateriaPrima.idMateriaPrima},
      ${muebleMateriaPrima.unidadesDisponibles}
    )`, (_err, res) => {
        console.log(res);
    });
};
exports.insertarMuebleMateriaPrima = insertarMuebleMateriaPrima;
const actualizarMueble = (mueble) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`call updateMueble(
        ${mueble.idMueble},
        '${mueble.nombre}',
        '${mueble.descripcion}',
        '${mueble.nombreCliente}',
        ${mueble.costoMateriaPrima},
        '${mueble.fechaEstimadaEntrega}',
        ${mueble.tipo}
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
exports.actualizarMueble = actualizarMueble;
const eliminarMueblePorId = (id) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`call deleteMueble (${id}) `, (err, res) => {
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
exports.eliminarMueblePorId = eliminarMueblePorId;
