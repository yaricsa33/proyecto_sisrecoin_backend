"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMueblePorId = exports.putActualizarMueble = exports.postInsertarMuebleListados = exports.postInsertarMueble = exports.getMateriasPrimasAsignadosMueble = exports.getUsuariosAsignadosMueble = exports.getMueblePorId = exports.getBuscarMueble = void 0;
const mueble_model_1 = require("../models/mueble.model");
const getBuscarMueble = (_req, res) => {
    (0, mueble_model_1.buscarMueble)()
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getBuscarMueble = getBuscarMueble;
const getMueblePorId = (req, res) => {
    (0, mueble_model_1.buscarMueblePorId)(req.params.id)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getMueblePorId = getMueblePorId;
const getUsuariosAsignadosMueble = (req, res) => {
    (0, mueble_model_1.buscarUsuariosAsignadosMueble)(req.params.id)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getUsuariosAsignadosMueble = getUsuariosAsignadosMueble;
const getMateriasPrimasAsignadosMueble = (req, res) => {
    (0, mueble_model_1.buscarMateriasPrimasAsignadosMueble)(req.params.id)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.getMateriasPrimasAsignadosMueble = getMateriasPrimasAsignadosMueble;
const postInsertarMueble = (req, res) => {
    (0, mueble_model_1.insertarMueble)(req.body)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.postInsertarMueble = postInsertarMueble;
const postInsertarMuebleListados = (req, res) => {
    (0, mueble_model_1.insertarMuebleListados)(req.body)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.postInsertarMuebleListados = postInsertarMuebleListados;
const putActualizarMueble = (req, res) => {
    (0, mueble_model_1.actualizarMueble)(req.body)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.putActualizarMueble = putActualizarMueble;
const deleteMueblePorId = (req, res) => {
    (0, mueble_model_1.eliminarMueblePorId)(req.params.id)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.deleteMueblePorId = deleteMueblePorId;
