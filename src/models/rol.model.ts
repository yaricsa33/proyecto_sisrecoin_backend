import { IRol } from "interface/rol.interface";
import dbConn from "./db.config";

export const buscarRol = (): Promise<IRol[]> => {
  return new Promise((resolve, reject) => {
    dbConn.query("select * from rol", (err, res: IRol[]) => {
      if (err) reject('error en la consulta ');
      resolve(res)
    });
  })
}

export const buscarRolPorId = (id: number): Promise<IRol> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`select * from rol where idRol = ${id}`, (err, res: IRol) => {
      if (err) reject('error en la consulta ');
      resolve(res)
    })
  })
}


export const insertarRol = (rol: IRol): Promise<IRol> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `call insertRol(
        '${rol.nombre}',
        '${rol.descripcion}',
      )`, (err, res: IRol) => {
      if (err) reject('Error al insertar');
      resolve(res)
    })
  })
}


export const actualizarRol = (rol: IRol): Promise<IRol> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `call updateRol(
        ${rol.idRol},
        '${rol.nombre}',
        '${rol.descripcion}',
      )`, (err, res: IRol) => {
      if (err) reject('Error al actualizar');
      resolve(res)
    })
  })
}


export const eliminarRolPorId = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`Delete from rol where idRol = ${id}`, (err, res: any) => {
      if (err) reject('Error al eliminar');
      resolve(res)
    });
  })
}
