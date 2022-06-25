import { autenticacion } from "../models/autenticacion.models"

export const postAutenticacion = (req: any, res: any) => {
  autenticacion(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
}