import { IUsuario } from 'interface/usuario.interface';
import dbConn from './db.config';

export const buscarUsuarios = (): Promise<IUsuario[]> => {
  return new Promise((resolve, reject) => {
    dbConn.query("Select * from usuario", (err, res: IUsuario[]) => {
      if (err) reject('Error en la consulta');
      resolve(res)
    });
  })
}

export const buscarUsuarioPorId = (id: number): Promise<IUsuario> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`Select * from usuario where idUsuario = ${id}`, (err, res: IUsuario) => {
      if (err) reject('Error en la consulta');
      resolve(res[0])
    });
  })
}

export const insertarUsuario = (usuario: IUsuario): Promise<IUsuario> => {
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
      if (err) reject('Error al insertar');
      resolve(res)
    })
  })
}


export const actualizarUsuario = (usuario: IUsuario): Promise<IUsuario> => {
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
      if (err) reject('Error al actualizar');
      resolve(res)
    })
  })
}


export const eliminarUsuarioPorId = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`Delete from usuario where idUsuario = ${id}`, (err, res: any) => {
      if (err) reject('Error al eliminar');
      resolve(res)
    });
  })
}
