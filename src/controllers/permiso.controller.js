"use strict";
exports.__esModule = true;
exports.deleteEliminarPermiso = exports.putActualizarPermiso = exports.postInsertarPermiso = exports.getPermisoPorId = exports.getPermiso = void 0;
var permiso_model_1 = require("../models/permiso.model");
var getPermiso = function (_req, res) {
    (0, permiso_model_1.buscarPermiso)()
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getPermiso = getPermiso;
var getPermisoPorId = function (req, res) {
    (0, permiso_model_1.buscarPermisoPorId)(req.params.id)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getPermisoPorId = getPermisoPorId;
var postInsertarPermiso = function (req, res) {
    (0, permiso_model_1.insertarPermiso)(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.postInsertarPermiso = postInsertarPermiso;
var putActualizarPermiso = function (req, res) {
    (0, permiso_model_1.actualizarPermiso)(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.putActualizarPermiso = putActualizarPermiso;
var deleteEliminarPermiso = function (req, res) {
    (0, permiso_model_1.eliminarPermisoPorId)(req.params.id)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.deleteEliminarPermiso = deleteEliminarPermiso;
