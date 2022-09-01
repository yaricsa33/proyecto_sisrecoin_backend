"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rol_controller_1 = require("../controllers/rol.controller");
const router = express_1.default.Router();
router.get('/', rol_controller_1.getRol);
router.get('/:id', rol_controller_1.getRolPorId);
router.post('/', rol_controller_1.postInsertarRol);
router.put('/', rol_controller_1.putActualizarRol);
router.delete('/:id', rol_controller_1.deleteEliminarRol);
exports.default = router;
