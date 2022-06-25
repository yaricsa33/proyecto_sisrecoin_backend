import { IVenta } from "interface/venta.interface";
import dbConn from "./db.config";
import { IResponse } from "interface/response.interface";

export const buscarVenta = (): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query("Select * from venta", (err, res: IVenta[]) => {
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

export const buscarVentaPorId = (id: number): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`Select * from venta where idVenta =${id}`, (err, res: IVenta) => {
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


export const insertarVenta = (venta: IVenta): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query
      (`call insertVenta(
      '${venta.nombreCliente}',
      '${venta.fechaEntrega}',
      ${venta.valorFinal},
      ${venta.idFactura},
      '${venta.fotoFactura}'
    )`, (err, res: IVenta) => {
        let response: IResponse = {} as IResponse;
        if (err) {
          response = { ...response, error: 400, mensaje: 'error' }
          reject(response);
        } else {
          response = { data: res[0][0], error: 200, mensaje: 'exito' }
          resolve(response);
        }
      })
  })
}

export const actualizarVenta = (venta: IVenta): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    console.log(`call updateVenta(
      ${venta.idVenta},
      '${venta.nombreCliente}',
      '${venta.fechaEntrega}',
      ${venta.valorFinal},
      ${venta.idFactura},
      '${venta.fotoFactura}'
     )`)
    dbConn.query(
      `call updateVenta(
        ${venta.idVenta},
       '${venta.nombreCliente}',
       '${venta.fechaEntrega}',
       ${venta.valorFinal},
       ${venta.idFactura},
       '${venta.fotoFactura}'
      )`, (err, res: IVenta) => {
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
export const eliminarVentaPorId = (id: number): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`call deleteVenta(${id})`, (err, res: IVenta) => {
      let response: IResponse = {} as IResponse;
      if (err) {
        response = { ...response, error: 400, mensaje: 'error' }
        reject(response);
      } else {
        response = { data: res, error: 200, mensaje: 'exito' }
        resolve(response)
      }
    });
  })
}

export const buscarMueblesParaVentas = (): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    dbConn.query(`select * from mueble where estado=2 `, (err, res: IVenta) => {
      let response: IResponse = {} as IResponse;
      if (err) {
        response = { ...response, error: 400, mensaje: 'error' }
        reject(response);
      } else {
        response = { data: res, error: 200, mensaje: 'exito' }
        resolve(response)
      }
    });
  })
}

export const insertarMuebleVentas = (listados: any) => {
  return new Promise(async (resolve, _reject) => {

    for (let i = 0; i < listados.muebles.length; i++) {
      await insertarMuebleUsuario(listados.muebles[i], listados.idVenta);
    }

    let response: IResponse = {} as IResponse;
    response = { data: null, error: 200, mensaje: 'exito' }
    resolve(response);
  });
}

export const insertarMuebleUsuario = (mueble: any, idVenta: number) => {

  dbConn.query
    (`call insertmuebleVenta(
      ${mueble.idMueble},
    ${idVenta},
    ${mueble.valor}
  )`, (err, res: any) => {
      console.log('res', res);
      console.log('err', err);
    })
}
