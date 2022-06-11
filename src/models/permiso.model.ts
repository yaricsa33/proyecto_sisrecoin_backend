import { IPermiso } from "interface/permiso.interface";
import dbConn from "./db.config";

export const buscarPermiso = (): Promise<IPermiso[]> => {
  return new Promise((resolve, reject) => {
    dbConn.query("Select * from permiso", (err, res: IPermiso[]) => {
      if (err) reject('error en la consulta ');
      resolve(res)
    });

  })

}

export const buscarPermisoPorId = (id: number): Promise<IPermiso> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`Select * from permiso where idPermiso = ${id}`, (err, res: IPermiso) => {
      if (err) reject('Error en la consulta');
      resolve(res)
    });
  })
}

export const insertarPermiso = (permiso: IPermiso): Promise<IPermiso> => {
  console.log(permiso);
  return new Promise((resolve, reject) => {
    dbConn.query(
      `call insertPermiso(
      '${permiso.nombre}',
      '${permiso.descripcion}',
      '${permiso.url}',
      ${permiso.idRol}
      )`, (err, res: IPermiso) => {
      if (err) reject('Error al insertar');
      resolve(res)
    })
  })
}


export const actualizarPermiso = (permiso: IPermiso): Promise<IPermiso> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `call updatePermiso(
       ${permiso.idPermiso},
       '${permiso.nombre}',
       '${permiso.descripcion}',
       '${permiso.url}',
       ${permiso.idRol}
      )`, (err, res: IPermiso) => {
      if (err) reject('Error al actualizar');
      resolve(res)
    })
  })
}


export const eliminarPermisoPorId = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`Delete from permiso where idPermiso = ${id}`, (err, res: any) => {
      if (err) reject('Error al eliminar');
      resolve(res)
    });
  })
}
