import {
  deleteMueblePorId,
  getBuscarMueble,
  getMateriasPrimasAsignadosMueble,
  getMueblePorId,
  getUsuariosAsignadosMueble,
  postInsertarMueble,
  postInsertarMuebleListados,
  putActualizarMueble,
  getMueblesAsignadosUsuarioPorId,
  putFinalizarMueble,
} from "../controllers/mueble.controller";
import express from "express";

const router = express.Router();

router.get("/", getBuscarMueble);
router.get("/:id", getMueblePorId);
router.get("/asignarMueblePorId/:id", getMueblesAsignadosUsuarioPorId);
router.get("/usuariosAsigandosMueble/:id", getUsuariosAsignadosMueble);
router.get(
  "/materiasPrimasAsigandosMueble/:id",
  getMateriasPrimasAsignadosMueble
);
router.post("/", postInsertarMueble);
router.post("/listados", postInsertarMuebleListados);
router.put("/", putActualizarMueble);
router.put("/finalizarMueble/:idUsuario/:idMueble", putFinalizarMueble);
router.delete("/:id", deleteMueblePorId);

export default router;
