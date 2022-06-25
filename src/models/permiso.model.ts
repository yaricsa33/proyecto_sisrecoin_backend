import { IPermiso } from "interface/permiso.interface";
import { IResponse } from "interface/response.interface";
import dbConn from "./db.config";

export const buscarPermiso = (): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query("Select * from permiso", (err, res: IPermiso[]) => {
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

export const buscarPermisoPorId = (id: number): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`Select * from permiso where idPermiso = ${id}`, (err, res: IPermiso) => {
      let response: IResponse = {} as IResponse;
      if (err) {
        response = { ...response, error: 400, mensaje: 'error' }
        reject(response);
      } else {
        response = { data: res[0], error: 200, mensaje: 'exito' }
        resolve(response);
      }
    });
  })
}

export const insertarPermiso = (permiso: IPermiso): Promise<IResponse> => {
  console.log(permiso);
  return new Promise((resolve, reject) => {
    dbConn.query(
      `call insertPermiso(
      '${permiso.nombre}',
      '${permiso.descripcion}',
      '${permiso.url}',
      ${permiso.idRol}
      )`, (err, res: IPermiso) => {
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


export const actualizarPermiso = (permiso: IPermiso): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `call updatePermiso(
       ${permiso.idPermiso},
       '${permiso.nombre}',
       '${permiso.descripcion}',
       '${permiso.url}',
       ${permiso.idRol}
      )`, (err, res: IPermiso) => {
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


export const eliminarPermisoPorId = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`Delete from permiso where idPermiso = ${id}`, (err, res: any) => {
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
