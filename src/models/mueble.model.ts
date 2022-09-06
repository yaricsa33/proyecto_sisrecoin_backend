import { IMueble } from "interface/mueble.interface";
import dbConn from "./db.config";
import { IResponse } from "interface/response.interface";

export const buscarMueble = (): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query("Select * from mueble", (err, res: IMueble[]) => {
      let response: IResponse = {} as IResponse;
      if (err) {
        response = { ...response, error: 400, mensaje: "error" };
        reject(response);
      } else {
        response = { data: res, error: 200, mensaje: "exito" };
        resolve(response);
      }
    });
  });
};

export const buscarMueblePorId = (id: number): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `Select * from mueble where idMueble =${id}`,
      (err, res: IMueble) => {
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

export const buscarUsuariosAsignadosMueble = (
  id: number
): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `
      select u.idUsuario,u.nombres, u.apellidos,r.nombre as nombreRol,mu.valor 
      from muebleusuario mu 
      inner join usuario u  on u.idUsuario = mu.idUsuario
      inner join rol r on r.idRol = u.idRol
      where mu.idMueble = ${id}`,
      (err, res: any) => {
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

export const buscarMateriasPrimasAsignadosMueble = (
  id: number
): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `
      SELECT  mp.idMateriaPrima,mp.nombre,mp.valor,mp.unidades,mmp.unidades as unidadesDisponibles
      FROM materiaprima mp 
      inner join mueblemateriaprima mmp on mp.idMateriaPrima = mmp.idMateriaPrima
      where mmp.idMueble = ${id}`,
      (err, res: any) => {
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

export const insertarMueble = (mueble: IMueble): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `call insertmueble(
      '${mueble.nombre}',
      '${mueble.descripcion}',
      '${mueble.nombreCliente}',
      ${mueble.costoMateriaPrima},
      '${mueble.fechaEstimadaEntrega}',
      ${mueble.tipo},
      '${mueble.fechaFabricacion}',
      ${mueble.estado},
      ${mueble.idUsuario}
    )`,
      (err, res: IMueble) => {
        let response: IResponse = {} as IResponse;
        if (err) {
          response = { ...response, error: 400, mensaje: "error" };
          reject(response);
        } else {
          response = { data: res[0][0], error: 200, mensaje: "exito" };
          resolve(response);
        }
      }
    );
  });
};

export const insertarMuebleListados = (listados: any) => {
  return new Promise(async (resolve, _reject) => {
    for (let i = 0; i < listados.usuarios.length; i++) {
      await insertarMuebleUsuario(listados.usuarios[i], listados.idMueble);
    }

    for (let i = 0; i < listados.materiaPrima.length; i++) {
      await insertarMuebleMateriaPrima(
        listados.materiaPrima[i],
        listados.idMueble
      );
    }

    let response: IResponse = {} as IResponse;
    response = { data: null, error: 200, mensaje: "exito" };
    resolve(response);
  });
};

export const insertarMuebleUsuario = (muebleUsuario: any, idMueble: number) => {
  dbConn.query(
    `call insertMuebleUsuario(
    ${idMueble},
    ${muebleUsuario.idUsuario},
    ${muebleUsuario.valor}
  )`,
    (err, res: any) => {
      console.log("res", res);
      console.log("err", err);
    }
  );
};

export const insertarMuebleMateriaPrima = (
  muebleMateriaPrima: any,
  idMueble: number
) => {
  dbConn.query(
    `call insertMuebleMateriaPrima(
      ${idMueble},
      ${muebleMateriaPrima.idMateriaPrima},
      ${muebleMateriaPrima.unidadesDisponibles}
    )`,
    (_err, res: any) => {
      console.log(res);
    }
  );
};

export const actualizarMueble = (mueble: IMueble): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `call updateMueble(
        ${mueble.idMueble},
        '${mueble.nombre}',
        '${mueble.descripcion}',
        '${mueble.nombreCliente}',
        ${mueble.costoMateriaPrima},
        '${mueble.fechaEstimadaEntrega}',
        ${mueble.tipo}
      )`,
      (err, res: IMueble) => {
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

export const eliminarMueblePorId = (id: number): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`call deleteMueble (${id}) `, (err, res: IMueble) => {
      let response: IResponse = {} as IResponse;
      if (err) {
        response = { ...response, error: 400, mensaje: "error" };
        reject(response);
      } else {
        response = { data: res, error: 200, mensaje: "exito" };
        resolve(response);
      }
    });
  });
};

export const buscarMueblesAsignadosUsuarioPorId = (
  id: number
): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `SELECT
        mu.idMueble,
        mu.nombre,
        mu.descripcion, 
        mu.nombreCliente,
        mu.fechaEstimadaEntrega,
        mu.tipo,
        muu.finalizado,
        mu.estado
      FROM muebleusuario AS muu
      INNER JOIN mueble AS mu
      ON  muu.idMueble = mu.idMueble
      WHERE muu.idUsuario = ${id}`,
      (err, res: any) => {
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

//que crear ruta y controlador

export const finalizarMueble = (
  idMueble: number,
  idUsuario: any
): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      `call finalizarMueble 
    (${idMueble},
      ${idUsuario} )
     `,
      (err, res: IMueble) => {
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
