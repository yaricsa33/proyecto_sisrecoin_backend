"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usuario_controller_1 = require("../controllers/usuario.controller");
var router = express_1["default"].Router();
router.get('/', usuario_controller_1.getUsuarios);
router.get('/muebles', usuario_controller_1.getUsuariosMuebles);
router.get('/:id', usuario_controller_1.getUsuarioPorId);
router.post('/', usuario_controller_1.postInsertarUsuario);
router.put('/', usuario_controller_1.putActualizarUsuario);
router["delete"]('/:id', usuario_controller_1.deleteEliminarUsuario);
exports["default"] = router;
