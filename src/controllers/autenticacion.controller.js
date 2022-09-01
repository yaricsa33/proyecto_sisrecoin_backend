"use strict";
exports.__esModule = true;
exports.postAutenticacion = void 0;
var autenticacion_models_1 = require("../models/autenticacion.models");
var postAutenticacion = function (req, res) {
    (0, autenticacion_models_1.autenticacion)(req.body)
        .then(function (data) {
        res.json(data);
    })["catch"](function (err) {
        res.json(err);
    });
};
exports.postAutenticacion = postAutenticacion;
