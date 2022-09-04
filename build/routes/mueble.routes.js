"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mueble_controller_1 = require("../controllers/mueble.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', mueble_controller_1.getBuscarMueble);
router.get('/:id', mueble_controller_1.getMueblePorId);
router.get('/usuariosAsigandosMueble/:id', mueble_controller_1.getUsuariosAsignadosMueble);
router.get('/materiasPrimasAsigandosMueble/:id', mueble_controller_1.getMateriasPrimasAsignadosMueble);
router.post('/', mueble_controller_1.postInsertarMueble);
router.post('/listados', mueble_controller_1.postInsertarMuebleListados);
router.put('/', mueble_controller_1.putActualizarMueble);
router.delete('/:id', mueble_controller_1.deleteMueblePorId);
exports.default = router;
