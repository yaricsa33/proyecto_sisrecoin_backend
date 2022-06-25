import express from 'express'

import { deleteEliminarUsuario, getUsuarioPorId, getUsuarios, getUsuariosMuebles, postInsertarUsuario, putActualizarUsuario } from '../controllers/usuario.controller'

const router = express.Router()

router.get('/', getUsuarios)

router.get('/muebles', getUsuariosMuebles)

router.get('/:id', getUsuarioPorId)

router.post('/', postInsertarUsuario)

router.put('/', putActualizarUsuario)

router.delete('/:id', deleteEliminarUsuario)



export default router 