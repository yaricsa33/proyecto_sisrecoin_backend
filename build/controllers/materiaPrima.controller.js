"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMateriaPrimaPorId = exports.putActualizarMateriaPrima = exports.postInsertarMateriaPrima = exports.getbuscarMateriaPrimaPorId = exports.getMateriaPrima = void 0;
const materiaPrima_models_1 = require("../models/materiaPrima.models");
const getMateriaPrima = (_req, res) => {
    (0, materiaPrima_models_1.buscarMateriaPrima)()
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getMateriaPrima = getMateriaPrima;
const getbuscarMateriaPrimaPorId = (req, res) => {
    (0, materiaPrima_models_1.buscarMateriaPrimaPorId)(req.params.id)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getbuscarMateriaPrimaPorId = getbuscarMateriaPrimaPorId;
const postInsertarMateriaPrima = (req, res) => {
    (0, materiaPrima_models_1.insertarMateriaPrima)(req.body)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.postInsertarMateriaPrima = postInsertarMateriaPrima;
const putActualizarMateriaPrima = (req, res) => {
    (0, materiaPrima_models_1.actualizarMateriaPrima)(req.body)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.putActualizarMateriaPrima = putActualizarMateriaPrima;
const deleteMateriaPrimaPorId = (req, res) => {
    (0, materiaPrima_models_1.eliminarMateriaPrimaPorId)(req.params.id)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.deleteMateriaPrimaPorId = deleteMateriaPrimaPorId;
