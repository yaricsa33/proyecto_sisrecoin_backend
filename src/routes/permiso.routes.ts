import express from "express";

import {
  deleteEliminarPermiso,
  getPermiso,
  getPermisoPorId,
  getPermisoPorIdRol,
  postInsertarPermiso,
  putActualizarPermiso,
} from "../controllers/permiso.controller";

const router = express.Router();

router.get("/", getPermiso);

router.get("/:id", getPermisoPorId);

router.get("/permisoPorIdRol/:idRol", getPermisoPorIdRol);

router.post("/", postInsertarPermiso);

router.put("/", putActualizarPermiso);

router.delete("/:id", deleteEliminarPermiso);

export default router;
