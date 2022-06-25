import { IMateriaPrima } from 'interface/materiaPrima.interface';
import dbConn from './db.config';
import { IResponse } from "interface/response.interface";

export const buscarMateriaPrima = (): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query("Select * from materiaprima", (err, res: IMateriaPrima[]) => {
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

export const buscarMateriaPrimaPorId = (id: number): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`Select * from materiaprima where idMateriaPrima =${id}`, (err, res: IMateriaPrima) => {
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

export const insertarMateriaPrima = (materiaPrima: IMateriaPrima): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query
      (`call insertMateriaprima(
      '${materiaPrima.nombre}',
      '${materiaPrima.descripcion}',
      ${materiaPrima.unidades},
      ${materiaPrima.valor}
    )`, (err, res: IMateriaPrima) => {
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

export const actualizarMateriaPrima = (materiaPrima: IMateriaPrima): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    console.log(`call updateMateriaPrima(
      ${materiaPrima.idMateriaPrima},
      '${materiaPrima.nombre}',
      '${materiaPrima.descripcion}',
      ${materiaPrima.unidades},
      ${materiaPrima.valor}
     )`)
    dbConn.query(
      `call updateMateriaPrima(
       ${materiaPrima.idMateriaPrima},
       '${materiaPrima.nombre}',
       '${materiaPrima.descripcion}',
       ${materiaPrima.unidades},
       ${materiaPrima.valor}
      )`, (err, res: IMateriaPrima) => {
      let response: IResponse = {} as IResponse;
      if (err) {
        response = { ...response, error: 400, mensaje: 'error' }
        reject(response);
      } else {
        response = { data: res, error: 200, mensaje: 'exito' }
        resolve(response)
      }
    })
  })
}


export const eliminarMateriaPrimaPorId = (id: number): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`Delete from materiaprima where idMateriaPrima = ${id}`, (err, res: IMateriaPrima) => {
      let response: IResponse = {} as IResponse;
      if (err) {
        response = { ...response, error: 400, mensaje: 'error' }
        reject('Error al eliminar');
      } else {
        response = { data: res, error: 200, mensaje: 'exito' }
        resolve(response)
      }
    });
  })
}


