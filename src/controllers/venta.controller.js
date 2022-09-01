"use strict";
exports.__esModule = true;
exports.getMueblesParaVentas = exports.deleteVentaPorId = exports.putActualizarVenta = exports.postInsertarVentaMueble = exports.postInsertarVenta = exports.getbuscarVentaPorId = exports.getVenta = void 0;
var venta_models_1 = require("../models/venta.models");
var getVenta = function (_req, res) {
    (0, venta_models_1.buscarVenta)()
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getVenta = getVenta;
var getbuscarVentaPorId = function (req, res) {
    (0, venta_models_1.buscarVentaPorId)(req.params.id)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getbuscarVentaPorId = getbuscarVentaPorId;
var postInsertarVenta = function (req, res) {
    (0, venta_models_1.insertarVenta)(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.postInsertarVenta = postInsertarVenta;
var postInsertarVentaMueble = function (req, res) {
    (0, venta_models_1.insertarMuebleVentas)(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.postInsertarVentaMueble = postInsertarVentaMueble;
var putActualizarVenta = function (req, res) {
    (0, venta_models_1.actualizarVenta)(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.putActualizarVenta = putActualizarVenta;
var deleteVentaPorId = function (req, res) {
    (0, venta_models_1.eliminarVentaPorId)(req.params.id)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.deleteVentaPorId = deleteVentaPorId;
var getMueblesParaVentas = function (_req, res) {
    (0, venta_models_1.buscarMueblesParaVentas)()
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getMueblesParaVentas = getMueblesParaVentas;
