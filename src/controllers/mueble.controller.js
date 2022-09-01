"use strict";
exports.__esModule = true;
exports.deleteMueblePorId = exports.putActualizarMueble = exports.postInsertarMuebleListados = exports.postInsertarMueble = exports.getMateriasPrimasAsignadosMueble = exports.getUsuariosAsignadosMueble = exports.getMueblePorId = exports.getBuscarMueble = void 0;
var mueble_model_1 = require("../models/mueble.model");
var getBuscarMueble = function (_req, res) {
    (0, mueble_model_1.buscarMueble)()
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getBuscarMueble = getBuscarMueble;
var getMueblePorId = function (req, res) {
    (0, mueble_model_1.buscarMueblePorId)(req.params.id)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getMueblePorId = getMueblePorId;
var getUsuariosAsignadosMueble = function (req, res) {
    (0, mueble_model_1.buscarUsuariosAsignadosMueble)(req.params.id)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getUsuariosAsignadosMueble = getUsuariosAsignadosMueble;
var getMateriasPrimasAsignadosMueble = function (req, res) {
    (0, mueble_model_1.buscarMateriasPrimasAsignadosMueble)(req.params.id)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getMateriasPrimasAsignadosMueble = getMateriasPrimasAsignadosMueble;
var postInsertarMueble = function (req, res) {
    (0, mueble_model_1.insertarMueble)(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.postInsertarMueble = postInsertarMueble;
var postInsertarMuebleListados = function (req, res) {
    (0, mueble_model_1.insertarMuebleListados)(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.postInsertarMuebleListados = postInsertarMuebleListados;
var putActualizarMueble = function (req, res) {
    (0, mueble_model_1.actualizarMueble)(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.putActualizarMueble = putActualizarMueble;
var deleteMueblePorId = function (req, res) {
    (0, mueble_model_1.eliminarMueblePorId)(req.params.id)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.deleteMueblePorId = deleteMueblePorId;
