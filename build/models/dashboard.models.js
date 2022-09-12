"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalAPagar = exports.gananciaVsCosto = exports.consultarGanancias = exports.consultaCantidadVentas = void 0;
const db_config_1 = __importDefault(require("./db.config"));
const consultaCantidadVentas = (mes, ano) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`
        SELECT COUNT(*) as cantidadVentas FROM venta 
        WHERE MONTH(fechaEntrega) = ${mes} AND YEAR(fechaEntrega) =${ano}
    `, (err, res) => {
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
exports.consultaCantidadVentas = consultaCantidadVentas;
const consultarGanancias = (mes, ano) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`
      SELECT SUM(valorFinal) - (select SUM(costoMateriaPrima) from mueble where MONTH(fechaFabricacion) = ${mes} AND YEAR (fechaFabricacion) = ${ano}) AS Patrimonio
      FROM venta 
      where MONTH(fechaEntrega) = ${mes} AND YEAR (fechaEntrega) = ${ano};
    `, (err, res) => {
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
exports.consultarGanancias = consultarGanancias;
const gananciaVsCosto = (mes, ano) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`
      SELECT SUM(valorFinal) as ganacias, (select SUM(costoMateriaPrima) from mueble where MONTH(fechaFabricacion) = ${mes}) as costos
      FROM venta 
      where MONTH(fechaEntrega) = ${mes} and YEAR (fechaEntrega) = ${ano};
    `, (err, res) => {
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
exports.gananciaVsCosto = gananciaVsCosto;
const totalAPagar = (mes, ano) => {
    return new Promise((resolve, reject) => {
        db_config_1.default.query(`
      select u.nombres as NombreUsuario, 
(
	select SUM(smu.valor) FROM muebleUsuario smu 
	inner join mueble m on smu.idMueble = m.idMueble 
    where m.estado in(2,3) and smu.idUsuario = u.idUsuario and MONTH(fechaFabricacion) = ${mes} AND YEAR (fechaFabricacion) = ${ano}
) as pagado
from muebleusuario mu 
inner join usuario u on mu.IdUsuario = u.IdUsuario
GROUP BY u.nombres
 
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
exports.totalAPagar = totalAPagar;
