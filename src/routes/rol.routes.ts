import express from 'express'

import { getRolPorId, postInsertarRol, putActualizarRol, deleteEliminarRol, getRol } from '../controllers/rol.controller'


const router = express.Router()

router.get('/', getRol)

router.get('/:id', getRolPorId)

router.post('/', postInsertarRol)

router.put('/', putActualizarRol)

router.delete('/:id', deleteEliminarRol)

export default router 