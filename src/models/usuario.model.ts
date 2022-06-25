import { IResponse } from 'interface/response.interface';
import { IUsuario } from 'interface/usuario.interface';
import dbConn from './db.config';

export const buscarUsuarios = (): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query("Select * from usuario", (err, res: IUsuario[]) => {
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

export const buscarUsuarioPorId = (id: number): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`Select * from usuario where idUsuario = ${id}`, (err, res: IUsuario) => {
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

export const buscarUsuariosParaMueble = (): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`select 
      u.idUsuario,
      u.nombres,
      u.apellidos,
      r.nombre as nombreRol
      from usuario u
      inner join rol r on u.idRol = r.idRol
      where u.idRol in(2,3)`,
      (err, res: IUsuario[]) => {
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

export const insertarUsuario = (usuario: IUsuario): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `call insertUsuario(
        '${usuario.nombres}',
        '${usuario.apellidos}',
        ${usuario.cedula},
        '${usuario.lugarNacimiento}',
        '${usuario.genero}',
        '${usuario.fechaIngreso}',
        '${usuario.correo}',
        '${usuario.contrasena}',
        ${usuario.celular},
        ${usuario.idRol}
      )`, (err, res: IUsuario) => {
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


export const actualizarUsuario = (usuario: IUsuario): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `call updateUsuario(
        ${usuario.idUsuario},
        '${usuario.nombres}',
        '${usuario.apellidos}',
        ${usuario.cedula},
        '${usuario.lugarNacimiento}',
        '${usuario.genero}',
        '${usuario.fechaIngreso}',
        '${usuario.correo}',
        '${usuario.contrasena}',
        ${usuario.celular},
        ${usuario.idRol}
      )`, (err, res: IUsuario) => {
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


export const eliminarUsuarioPorId = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`Delete from usuario where idUsuario = ${id}`, (err, res: any) => {
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


