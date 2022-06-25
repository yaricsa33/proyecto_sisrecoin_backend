import { buscarPermiso, buscarPermisoPorId, insertarPermiso, actualizarPermiso, eliminarPermisoPorId } from "../models/permiso.model"

export const getPermiso = (_req: any, res: any) => {
  buscarPermiso()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}


export const getPermisoPorId = (req: any, res: any) => {
  buscarPermisoPorId(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })

}

export const postInsertarPermiso = (req: any, res: any) => {
  insertarPermiso(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const putActualizarPermiso = (req: any, res: any) => {
  actualizarPermiso(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const deleteEliminarPermiso = (req: any, res: any) => {
  eliminarPermisoPorId(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}


