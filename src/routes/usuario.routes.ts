import express from 'express'

import { deleteEliminarUsuario, getUsuarioPorId, getUsuarios, postInsertarUsuario, putActualizarUsuario } from '../controllers/usuario.controller'

const router = express.Router()

router.get('/', getUsuarios)

router.get('/:id', getUsuarioPorId)

router.post('/', postInsertarUsuario)

router.put('/', putActualizarUsuario)

router.delete('/:id', deleteEliminarUsuario)



export default router 