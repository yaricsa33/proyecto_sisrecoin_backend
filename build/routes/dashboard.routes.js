"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_controller_1 = require("../controllers/dashboard.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/cantidadVentas/:mes/:ano", dashboard_controller_1.getConsultaCantidadVentas);
router.get("/consultarGanancias/:mes/:ano", dashboard_controller_1.getConsultarGanancias);
router.get("/gananciaVsCosto/:mes/:ano", dashboard_controller_1.getGananciaVsCosto);
router.get("/totalAPagar/:mes/:ano", dashboard_controller_1.getTotalAPagar);
exports.default = router;
