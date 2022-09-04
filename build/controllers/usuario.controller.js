"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEliminarUsuario = exports.putActualizarUsuario = exports.postInsertarUsuario = exports.getUsuariosMuebles = exports.getUsuarioPorId = exports.getUsuarios = void 0;
const usuario_model_1 = require("../models/usuario.model");
const getUsuarios = (_req, res) => {
    (0, usuario_model_1.buscarUsuarios)()
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getUsuarios = getUsuarios;
const getUsuarioPorId = (req, res) => {
    (0, usuario_model_1.buscarUsuarioPorId)(req.params.id)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getUsuarioPorId = getUsuarioPorId;
const getUsuariosMuebles = (_req, res) => {
    (0, usuario_model_1.buscarUsuariosParaMueble)()
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getUsuariosMuebles = getUsuariosMuebles;
const postInsertarUsuario = (req, res) => {
    (0, usuario_model_1.insertarUsuario)(req.body)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.postInsertarUsuario = postInsertarUsuario;
const putActualizarUsuario = (req, res) => {
    (0, usuario_model_1.actualizarUsuario)(req.body)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.putActualizarUsuario = putActualizarUsuario;
const deleteEliminarUsuario = (req, res) => {
    (0, usuario_model_1.eliminarUsuarioPorId)(req.params.id)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.deleteEliminarUsuario = deleteEliminarUsuario;
