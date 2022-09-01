"use strict";
exports.__esModule = true;
exports.deleteEliminarUsuario = exports.putActualizarUsuario = exports.postInsertarUsuario = exports.getUsuariosMuebles = exports.getUsuarioPorId = exports.getUsuarios = void 0;
var usuario_model_1 = require("../models/usuario.model");
var getUsuarios = function (_req, res) {
    (0, usuario_model_1.buscarUsuarios)()
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getUsuarios = getUsuarios;
var getUsuarioPorId = function (req, res) {
    (0, usuario_model_1.buscarUsuarioPorId)(req.params.id)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getUsuarioPorId = getUsuarioPorId;
var getUsuariosMuebles = function (_req, res) {
    (0, usuario_model_1.buscarUsuariosParaMueble)()
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.getUsuariosMuebles = getUsuariosMuebles;
var postInsertarUsuario = function (req, res) {
    (0, usuario_model_1.insertarUsuario)(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.postInsertarUsuario = postInsertarUsuario;
var putActualizarUsuario = function (req, res) {
    (0, usuario_model_1.actualizarUsuario)(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.putActualizarUsuario = putActualizarUsuario;
var deleteEliminarUsuario = function (req, res) {
    (0, usuario_model_1.eliminarUsuarioPorId)(req.params.id)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.deleteEliminarUsuario = deleteEliminarUsuario;
