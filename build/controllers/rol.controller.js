"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEliminarRol = exports.putActualizarRol = exports.postInsertarRol = exports.getRolPorId = exports.getRol = void 0;
const rol_model_1 = require("../models/rol.model");
const getRol = (_req, res) => {
    (0, rol_model_1.buscarRol)()
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getRol = getRol;
const getRolPorId = (req, res) => {
    (0, rol_model_1.buscarRolPorId)(req.params.id)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getRolPorId = getRolPorId;
const postInsertarRol = (req, res) => {
    (0, rol_model_1.insertarRol)(req.body)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.postInsertarRol = postInsertarRol;
const putActualizarRol = (req, res) => {
    (0, rol_model_1.actualizarRol)(req.body)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.putActualizarRol = putActualizarRol;
const deleteEliminarRol = (req, res) => {
    (0, rol_model_1.eliminarRolPorId)(req.params.id)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.deleteEliminarRol = deleteEliminarRol;
