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
exports.insertarMuebleUsuario = exports.insertarMuebleVentas = exports.buscarMueblesParaVentas = exports.eliminarVentaPorId = exports.actualizarVenta = exports.insertarVenta = exports.buscarVentaPorId = exports.buscarVenta = void 0;
const db_config_1 = __importDefault(require("./db.config"));
const buscarVenta = () => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query("Select * from venta", (err, res) => {
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
exports.buscarVenta = buscarVenta;
const buscarVentaPorId = (id) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`Select * from venta where idVenta =${id}`, (err, res) => {
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
exports.buscarVentaPorId = buscarVentaPorId;
const insertarVenta = (venta) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`call insertVenta(
      '${venta.nombreCliente}',
      '${venta.fechaEntrega}',
      ${venta.valorFinal},
      ${venta.idFactura},
      '${venta.fotoFactura}'
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
exports.insertarVenta = insertarVenta;
const actualizarVenta = (venta) => {
    return new Promise((resolve, reject) => {
        console.log(`call updateVenta(
      ${venta.idVenta},
      '${venta.nombreCliente}',
      '${venta.fechaEntrega}',
      ${venta.valorFinal},
      ${venta.idFactura},
      '${venta.fotoFactura}'
     )`);
        db_config_1.default.query(`call updateVenta(
        ${venta.idVenta},
       '${venta.nombreCliente}',
       '${venta.fechaEntrega}',
       ${venta.valorFinal},
       ${venta.idFactura},
       '${venta.fotoFactura}'
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
exports.actualizarVenta = actualizarVenta;
const eliminarVentaPorId = (id) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`call deleteVenta(${id})`, (err, res) => {
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
exports.eliminarVentaPorId = eliminarVentaPorId;
const buscarMueblesParaVentas = () => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`select * from mueble where estado=2 `, (err, res) => {
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
exports.buscarMueblesParaVentas = buscarMueblesParaVentas;
const insertarMuebleVentas = (listados) => {
    return new Promise((resolve, _reject) => __awaiter(void 0, void 0, void 0, function* () {
        for (let i = 0; i < listados.muebles.length; i++) {
            yield (0, exports.insertarMuebleUsuario)(listados.muebles[i], listados.idVenta);
        }
        let response = {};
        response = { data: null, error: 200, mensaje: 'exito' };
        resolve(response);
    }));
};
exports.insertarMuebleVentas = insertarMuebleVentas;
const insertarMuebleUsuario = (mueble, idVenta) => {
    db_config_1.default.query(`call insertmuebleVenta(
      ${mueble.idMueble},
    ${idVenta},
    ${mueble.valor}
  )`, (err, res) => {
        console.log('res', res);
        console.log('err', err);
    });
};
exports.insertarMuebleUsuario = insertarMuebleUsuario;
