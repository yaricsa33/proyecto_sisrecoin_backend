"use strict";
exports.__esModule = true;
exports.deleteEliminarRol = exports.putActualizarRol = exports.postInsertarRol = exports.getRolPorId = exports.getRol = void 0;
var rol_model_1 = require("../models/rol.model");
var getRol = function (_req, res) {
    (0, rol_model_1.buscarRol)()
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getRol = getRol;
var getRolPorId = function (req, res) {
    (0, rol_model_1.buscarRolPorId)(req.params.id)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getRolPorId = getRolPorId;
var postInsertarRol = function (req, res) {
    (0, rol_model_1.insertarRol)(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.postInsertarRol = postInsertarRol;
var putActualizarRol = function (req, res) {
    (0, rol_model_1.actualizarRol)(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.putActualizarRol = putActualizarRol;
var deleteEliminarRol = function (req, res) {
    (0, rol_model_1.eliminarRolPorId)(req.params.id)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.deleteEliminarRol = deleteEliminarRol;
