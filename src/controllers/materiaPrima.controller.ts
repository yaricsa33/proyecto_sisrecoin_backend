
import { actualizarMateriaPrima, buscarMateriaPrima, buscarMateriaPrimaPorId, eliminarMateriaPrimaPorId, insertarMateriaPrima } from "../models/materiaPrima.models"


export const getMateriaPrima = (_req: any, res: any) => {
  buscarMateriaPrima()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const getbuscarMateriaPrimaPorId = (req: any, res: any) => {
  buscarMateriaPrimaPorId(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const postInsertarMateriaPrima = (req: any, res: any) => {
  insertarMateriaPrima(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const putActualizarMateriaPrima = (req: any, res: any) => {
  actualizarMateriaPrima(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const deleteMateriaPrimaPorId = (req: any, res: any) => {
  eliminarMateriaPrimaPorId(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}