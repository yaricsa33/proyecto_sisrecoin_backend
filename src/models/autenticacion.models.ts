import { IAutenticacion } from "interface/autenticacion.interface";
import { IResponse } from "interface/response.interface";
import dbConn from "./db.config";


export const autenticacion = (auth: IAutenticacion): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`
      select u.idUsuario,u.nombres, u.apellidos,u.idRol, r.nombre as nombreRol
      from usuario u 
      inner join rol r on u.idRol = r.idRol 
      where u.cedula=${auth.cedula} and u.contrasena='${auth.contrasena}'`, (_err, res) => {
      let response: IResponse = {} as IResponse;

      if (Object.entries(res).length === 0) {
        response = { ...response, error: 400, mensaje: 'usuario o contraseña invalido' }
        reject(response);
      } else {
        response = { data: res[0], error: 200, mensaje: '' }
        resolve(response);
      }
    })
  })

}