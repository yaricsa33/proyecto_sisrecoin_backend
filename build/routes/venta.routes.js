"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const venta_controller_1 = require("../controllers/venta.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", venta_controller_1.getVenta);
router.get("/mueblesVentas", venta_controller_1.getMueblesParaVentas);
router.get("/:id", venta_controller_1.getbuscarVentaPorId);
router.get("/mueblesAsignadosVenta/:id", venta_controller_1.getMueblesAsignadosVenta);
router.post("/", venta_controller_1.postInsertarVenta);
router.post("/listados", venta_controller_1.postInsertarVentaMueble);
router.put("/", venta_controller_1.putActualizarVenta);
router.delete("/:id", venta_controller_1.deleteVentaPorId);
exports.default = router;
