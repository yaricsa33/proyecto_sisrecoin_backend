"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAutenticacion = void 0;
const autenticacion_models_1 = require("../models/autenticacion.models");
const postAutenticacion = (req, res) => {
    (0, autenticacion_models_1.autenticacion)(req.body)
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json(err);
    });
};
exports.postAutenticacion = postAutenticacion;
