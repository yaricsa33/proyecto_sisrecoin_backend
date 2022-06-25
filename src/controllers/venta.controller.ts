import { actualizarVenta, buscarMueblesParaVentas, buscarVenta, buscarVentaPorId, eliminarVentaPorId, insertarMuebleVentas, insertarVenta } from "../models/venta.models";

export const getVenta = (_req: any, res: any) => {
  buscarVenta()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const getbuscarVentaPorId = (req: any, res: any) => {
  buscarVentaPorId(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const postInsertarVenta = (req: any, res: any) => {
  insertarVenta(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const postInsertarVentaMueble = (req: any, res: any) => {
  insertarMuebleVentas(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const putActualizarVenta = (req: any, res: any) => {
  actualizarVenta(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}
export const deleteVentaPorId = (req: any, res: any) => {
  eliminarVentaPorId(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}
export const getMueblesParaVentas = (_req: any, res: any) => {
  buscarMueblesParaVentas()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}