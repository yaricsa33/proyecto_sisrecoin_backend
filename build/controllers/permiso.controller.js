"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEliminarPermiso = exports.putActualizarPermiso = exports.postInsertarPermiso = exports.getPermisoPorId = exports.getPermiso = void 0;
const permiso_model_1 = require("../models/permiso.model");
const getPermiso = (_req, res) => {
    (0, permiso_model_1.buscarPermiso)()
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getPermiso = getPermiso;
const getPermisoPorId = (req, res) => {
    (0, permiso_model_1.buscarPermisoPorId)(req.params.id)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getPermisoPorId = getPermisoPorId;
const postInsertarPermiso = (req, res) => {
    (0, permiso_model_1.insertarPermiso)(req.body)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.postInsertarPermiso = postInsertarPermiso;
const putActualizarPermiso = (req, res) => {
    (0, permiso_model_1.actualizarPermiso)(req.body)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.putActualizarPermiso = putActualizarPermiso;
const deleteEliminarPermiso = (req, res) => {
    (0, permiso_model_1.eliminarPermisoPorId)(req.params.id)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.deleteEliminarPermiso = deleteEliminarPermiso;
