import { IResponse } from "interface/response.interface";
import { IRol } from "interface/rol.interface";
import dbConn from "./db.config";

export const buscarRol = (): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query("select * from rol", (err, res: IRol[]) => {
      let response: IResponse = {} as IResponse;
      if (err) {
        response = { ...response, error: 400, mensaje: 'error' }
        reject(response);
      } else {
        response = { data: res, error: 200, mensaje: 'exito' }
        resolve(response);
      }
    });
  })
}

export const buscarRolPorId = (id: number): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`select * from rol where idRol = ${id}`, (err, res: IRol) => {
      let response: IResponse = {} as IResponse;
      if (err) {
        response = { ...response, error: 400, mensaje: 'error' }
        reject(response);
      } else {
        response = { data: res[0], error: 200, mensaje: 'exito' }
        resolve(response);
      }
    })
  })
}


export const insertarRol = (rol: IRol): Promise<IResponse> => {
  console.log(rol);
  return new Promise((resolve, reject) => {
    dbConn.query(
      `call insertRol(
        '${rol.nombre}',
        '${rol.descripcion}'
      )`, (err, res: IRol) => {
      let response: IResponse = {} as IResponse;
      if (err) {
        response = { ...response, error: 400, mensaje: 'error' }
        reject(response);
      } else {
        response = { data: res, error: 200, mensaje: 'exito' }
        resolve(response);
      }
    })
  })
}


export const actualizarRol = (rol: IRol): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `call updateRol(
        ${rol.idRol},
        '${rol.nombre}',
        '${rol.descripcion}'
      )`, (err, res: IRol) => {
      let response: IResponse = {} as IResponse;
      if (err) {
        response = { ...response, error: 400, mensaje: 'error' }
        reject(response);
      } else {
        response = { data: res, error: 200, mensaje: 'exito' }
        resolve(response);
      }
    })
  })
}


export const eliminarRolPorId = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`Delete from rol where idRol = ${id}`, (err, res: any) => {
      let response: IResponse = {} as IResponse;
      if (err) {
        response = { ...response, error: 400, mensaje: 'error' }
        reject(response);
      } else {
        response = { data: res, error: 200, mensaje: 'exito' }
        resolve(response);
      }
    });
  })
}
