"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const materiaPrima_controller_1 = require("../controllers/materiaPrima.controller");
const router = express_1.default.Router();
router.get('/', materiaPrima_controller_1.getMateriaPrima);
router.get('/:id', materiaPrima_controller_1.getbuscarMateriaPrimaPorId);
router.post('/', materiaPrima_controller_1.postInsertarMateriaPrima);
router.put('/', materiaPrima_controller_1.putActualizarMateriaPrima);
router.delete('/:id', materiaPrima_controller_1.deleteMateriaPrimaPorId);
exports.default = router;
