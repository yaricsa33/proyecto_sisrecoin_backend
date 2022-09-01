"use strict";
exports.__esModule = true;
exports.deleteMateriaPrimaPorId = exports.putActualizarMateriaPrima = exports.postInsertarMateriaPrima = exports.getbuscarMateriaPrimaPorId = exports.getMateriaPrima = void 0;
var materiaPrima_models_1 = require("../models/materiaPrima.models");
var getMateriaPrima = function (_req, res) {
    (0, materiaPrima_models_1.buscarMateriaPrima)()
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getMateriaPrima = getMateriaPrima;
var getbuscarMateriaPrimaPorId = function (req, res) {
    (0, materiaPrima_models_1.buscarMateriaPrimaPorId)(req.params.id)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getbuscarMateriaPrimaPorId = getbuscarMateriaPrimaPorId;
var postInsertarMateriaPrima = function (req, res) {
    (0, materiaPrima_models_1.insertarMateriaPrima)(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.postInsertarMateriaPrima = postInsertarMateriaPrima;
var putActualizarMateriaPrima = function (req, res) {
    (0, materiaPrima_models_1.actualizarMateriaPrima)(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.putActualizarMateriaPrima = putActualizarMateriaPrima;
var deleteMateriaPrimaPorId = function (req, res) {
    (0, materiaPrima_models_1.eliminarMateriaPrimaPorId)(req.params.id)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.deleteMateriaPrimaPorId = deleteMateriaPrimaPorId;
