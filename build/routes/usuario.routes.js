"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = express_1.default.Router();
router.get('/', usuario_controller_1.getUsuarios);
router.get('/muebles', usuario_controller_1.getUsuariosMuebles);
router.get('/:id', usuario_controller_1.getUsuarioPorId);
router.post('/', usuario_controller_1.postInsertarUsuario);
router.put('/', usuario_controller_1.putActualizarUsuario);
router.delete('/:id', usuario_controller_1.deleteEliminarUsuario);
exports.default = router;
