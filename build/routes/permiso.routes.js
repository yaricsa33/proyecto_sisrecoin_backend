"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const permiso_controller_1 = require("../controllers/permiso.controller");
const router = express_1.default.Router();
router.get('/', permiso_controller_1.getPermiso);
router.get('/:id', permiso_controller_1.getPermisoPorId);
router.post('/', permiso_controller_1.postInsertarPermiso);
router.put('/', permiso_controller_1.putActualizarPermiso);
router.delete('/:id', permiso_controller_1.deleteEliminarPermiso);
exports.default = router;
