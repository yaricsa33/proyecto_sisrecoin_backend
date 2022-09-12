import {
  consultaCantidadVentas,
  consultarGanancias,
  gananciaVsCosto,
  totalAPagar,
} from "../models/dashboard.models";

export const getConsultaCantidadVentas = (req: any, res: any) => {
  consultaCantidadVentas(req.params.mes, req.params.ano)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
};

export const getConsultarGanancias = (req: any, res: any) => {
  consultarGanancias(req.params.mes, req.params.ano)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
};

export const getGananciaVsCosto = (req: any, res: any) => {
  gananciaVsCosto(req.params.mes, req.params.ano)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
};

export const getTotalAPagar = (req: any, res: any) => {
  totalAPagar(req.params.mes, req.params.ano)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
};
