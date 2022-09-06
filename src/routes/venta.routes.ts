import {
  deleteVentaPorId,
  getbuscarVentaPorId,
  getMueblesAsignadosVenta,
  getMueblesParaVentas,
  getVenta,
  postInsertarVenta,
  postInsertarVentaMueble,
  putActualizarVenta,
} from "../controllers/venta.controller";

import express from "express";
const router = express.Router();

router.get("/", getVenta);
router.get("/mueblesVentas", getMueblesParaVentas);
router.get("/:id", getbuscarVentaPorId);
router.get("/mueblesAsignadosVenta/:id", getMueblesAsignadosVenta);
router.post("/", postInsertarVenta);
router.post("/listados", postInsertarVentaMueble);
router.put("/", putActualizarVenta);
router.delete("/:id", deleteVentaPorId);

export default router;
