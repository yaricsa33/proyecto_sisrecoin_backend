"use strict";
exports.__esModule = true;
var express_1 = require("express");
var autenticacion_controller_1 = require("../controllers/autenticacion.controller");
var router = express_1["default"].Router();
router.post('/', autenticacion_controller_1.postAutenticacion);
exports["default"] = router;
