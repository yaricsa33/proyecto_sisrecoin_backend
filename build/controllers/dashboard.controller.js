"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalAPagar = exports.getGananciaVsCosto = exports.getConsultarGanancias = exports.getConsultaCantidadVentas = void 0;
const dashboard_models_1 = require("../models/dashboard.models");
const getConsultaCantidadVentas = (req, res) => {
    (0, dashboard_models_1.consultaCantidadVentas)(req.params.mes, req.params.ano)
        .then((data) => {
        res.json(data);
    })
        .catch((err) => {
        res.json(err);
    });
};
exports.getConsultaCantidadVentas = getConsultaCantidadVentas;
const getConsultarGanancias = (req, res) => {
    (0, dashboard_models_1.consultarGanancias)(req.params.mes, req.params.ano)
        .then((data) => {
        res.json(data);
    })
        .catch((err) => {
        res.json(err);
    });
};
exports.getConsultarGanancias = getConsultarGanancias;
const getGananciaVsCosto = (req, res) => {
    (0, dashboard_models_1.gananciaVsCosto)(req.params.mes, req.params.ano)
        .then((data) => {
        res.json(data);
    })
        .catch((err) => {
        res.json(err);
    });
};
exports.getGananciaVsCosto = getGananciaVsCosto;
const getTotalAPagar = (req, res) => {
    (0, dashboard_models_1.totalAPagar)(req.params.mes, req.params.ano)
        .then((data) => {
        res.json(data);
    })
        .catch((err) => {
        res.json(err);
    });
};
exports.getTotalAPagar = getTotalAPagar;
