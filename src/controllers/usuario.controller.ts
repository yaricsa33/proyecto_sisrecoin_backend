import { actualizarUsuario, buscarUsuarioPorId, buscarUsuarios, buscarUsuariosParaMueble, eliminarUsuarioPorId, insertarUsuario } from "../models/usuario.model";

export const getUsuarios = (_req: any, res: any) => {
  buscarUsuarios()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const getUsuarioPorId = (req: any, res: any) => {
  buscarUsuarioPorId(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const getUsuariosMuebles = (_req: any, res: any) => {
  buscarUsuariosParaMueble()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
    .catch(err => {
      res.json(err);
    })
}

export const postInsertarUsuario = (req: any, res: any) => {
  insertarUsuario(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const putActualizarUsuario = (req: any, res: any) => {
  actualizarUsuario(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const deleteEliminarUsuario = (req: any, res: any) => {
  eliminarUsuarioPorId(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

