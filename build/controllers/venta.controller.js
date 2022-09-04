"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMueblesParaVentas = exports.deleteVentaPorId = exports.putActualizarVenta = exports.postInsertarVentaMueble = exports.postInsertarVenta = exports.getbuscarVentaPorId = exports.getVenta = void 0;
const venta_models_1 = require("../models/venta.models");
const getVenta = (_req, res) => {
    (0, venta_models_1.buscarVenta)()
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getVenta = getVenta;
const getbuscarVentaPorId = (req, res) => {
    (0, venta_models_1.buscarVentaPorId)(req.params.id)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getbuscarVentaPorId = getbuscarVentaPorId;
const postInsertarVenta = (req, res) => {
    (0, venta_models_1.insertarVenta)(req.body)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.postInsertarVenta = postInsertarVenta;
const postInsertarVentaMueble = (req, res) => {
    (0, venta_models_1.insertarMuebleVentas)(req.body)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.postInsertarVentaMueble = postInsertarVentaMueble;
const putActualizarVenta = (req, res) => {
    (0, venta_models_1.actualizarVenta)(req.body)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.putActualizarVenta = putActualizarVenta;
const deleteVentaPorId = (req, res) => {
    (0, venta_models_1.eliminarVentaPorId)(req.params.id)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.deleteVentaPorId = deleteVentaPorId;
const getMueblesParaVentas = (_req, res) => {
    (0, venta_models_1.buscarMueblesParaVentas)()
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getMueblesParaVentas = getMueblesParaVentas;
