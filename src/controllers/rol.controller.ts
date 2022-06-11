import { actualizarRol, buscarRol, buscarRolPorId, eliminarRolPorId, insertarRol } from "../models/rol.model";


export const getRol = (_req: any, res: any) => {
  buscarRol()
    .then(data => {
      res.json(data);
    })
}


export const getRolPorId = (req: any, res: any) => {
  buscarRolPorId(req.params.id)
    .then(data => {
      res.json(data);
    })

}

export const postInsertarRol = (req: any, res: any) => {
  insertarRol(req.body)
    .then(data => {
      res.json(data);
    })
}

export const putActualizarRol = (req: any, res: any) => {
  actualizarRol(req.body)
    .then(data => {
      res.json(data);
    })
}

export const deleteEliminarRol = (req: any, res: any) => {
  eliminarRolPorId(req.params.id)
    .then(data => {
      res.json(data);
    })
}




