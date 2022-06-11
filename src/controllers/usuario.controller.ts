import { actualizarUsuario, buscarUsuarioPorId, buscarUsuarios, eliminarUsuarioPorId, insertarUsuario } from "../models/usuario.model";

export const getUsuarios = (_req: any, res: any) => {
  buscarUsuarios()
    .then(data => {
      res.json(data);
    })
}

export const getUsuarioPorId = (req: any, res: any) => {
  buscarUsuarioPorId(req.params.id)
    .then(data => {
      res.json(data);
    })

}

export const postInsertarUsuario = (req: any, res: any) => {
  insertarUsuario(req.body)
    .then(data => {
      res.json(data);
    })
}

export const putActualizarUsuario = (req: any, res: any) => {
  actualizarUsuario(req.body)
    .then(data => {
      res.json(data);
    })
}

export const deleteEliminarUsuario = (req: any, res: any) => {
  eliminarUsuarioPorId(req.params.id)
    .then(data => {
      res.json(data);
    })
}


