import dbConn from "./db.config";
import { IResponse } from "interface/response.interface";

export const consultaCantidadVentas = (
  mes: number,
  ano: number
): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `
        SELECT COUNT(*) as cantidadVentas FROM venta 
        WHERE MONTH(fechaEntrega) = ${mes} AND YEAR(fechaEntrega) =${ano}
    `,
      (err, res: any[]) => {
        let response: IResponse = {} as IResponse;
        if (err) {
          response = { ...response, error: 400, mensaje: "error" };
          reject(response);
        } else {
          response = { data: res[0], error: 200, mensaje: "exito" };
          resolve(response);
        }
      }
    );
  });
};

export const consultarGanancias = (
  mes: number,
  ano: number
): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `
      SELECT SUM(valorFinal) - (select ifnull(SUM(costoMateriaPrima),0) from mueble where MONTH(fechaFabricacion) = ${mes} AND YEAR (fechaFabricacion) = ${ano}) AS Patrimonio
      FROM venta 
      where MONTH(fechaEntrega) = ${mes} AND YEAR (fechaEntrega) = ${ano};
    `,
      (err, res: any[]) => {
        let response: IResponse = {} as IResponse;
        if (err) {
          response = { ...response, error: 400, mensaje: "error" };
          reject(response);
        } else {
          response = { data: res[0], error: 200, mensaje: "exito" };
          resolve(response);
        }
      }
    );
  });
};

export const gananciaVsCosto = (
  mes: number,
  ano: number
): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `
      SELECT SUM(valorFinal) as ganacias, (select SUM(costoMateriaPrima) from mueble where MONTH(fechaFabricacion) = ${mes}) as costos
      FROM venta 
      where MONTH(fechaEntrega) = ${mes} and YEAR (fechaEntrega) = ${ano};
    `,
      (err, res: any[]) => {
        let response: IResponse = {} as IResponse;
        if (err) {
          response = { ...response, error: 400, mensaje: "error" };
          reject(response);
        } else {
          response = { data: res[0], error: 200, mensaje: "exito" };
          resolve(response);
        }
      }
    );
  });
};

export const totalAPagar = (mes: number, ano: number): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `
      select u.nombres as NombreUsuario, 
(
	select SUM(smu.valor) FROM muebleUsuario smu 
	inner join mueble m on smu.idMueble = m.idMueble 
    where m.estado in(2,3) and smu.idUsuario = u.idUsuario and MONTH(fechaFabricacion) = ${mes} AND YEAR (fechaFabricacion) = ${ano}
) as pagado
from muebleusuario mu 
inner join usuario u on mu.IdUsuario = u.IdUsuario
GROUP BY u.nombres
 
    `,
      (err, res: any[]) => {
        let response: IResponse = {} as IResponse;
        if (err) {
          response = { ...response, error: 400, mensaje: "error" };
          reject(response);
        } else {
          response = { data: res, error: 200, mensaje: "exito" };
          resolve(response);
        }
      }
    );
  });
};
