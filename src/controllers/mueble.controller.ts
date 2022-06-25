import { actualizarMueble, buscarMateriasPrimasAsignadosMueble, buscarMueble, buscarMueblePorId, buscarUsuariosAsignadosMueble, eliminarMueblePorId, insertarMueble, insertarMuebleListados } from "../models/mueble.model"



export const getBuscarMueble = (_req: any, res: any) => {
  buscarMueble()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const getMueblePorId = (req: any, res: any) => {
  buscarMueblePorId(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const getUsuariosAsignadosMueble = (req: any, res: any) => {
  buscarUsuariosAsignadosMueble(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const getMateriasPrimasAsignadosMueble = (req: any, res: any) => {
  buscarMateriasPrimasAsignadosMueble(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const postInsertarMueble = (req: any, res: any) => {
  insertarMueble(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const postInsertarMuebleListados = (req: any, res: any) => {
  insertarMuebleListados(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}
export const putActualizarMueble = (req: any, res: any) => {
  actualizarMueble(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}

export const deleteMueblePorId = (req: any, res: any) => {
  eliminarMueblePorId(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}