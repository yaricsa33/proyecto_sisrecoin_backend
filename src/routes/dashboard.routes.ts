import {
  getConsultaCantidadVentas,
  getConsultarGanancias,
  getGananciaVsCosto,
  getTotalAPagar,
} from "../controllers/dashboard.controller";
import express from "express";

const router = express.Router();

router.get("/cantidadVentas/:mes/:ano", getConsultaCantidadVentas);
router.get("/consultarGanancias/:mes/:ano", getConsultarGanancias);
router.get("/gananciaVsCosto/:mes/:ano", getGananciaVsCosto);
router.get("/totalAPagar/:mes/:ano", getTotalAPagar);
export default router;
