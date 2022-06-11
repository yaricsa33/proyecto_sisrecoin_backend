import express from 'express'

import { deleteEliminarPermiso, getPermiso, getPermisoPorId, postInsertarPermiso, putActualizarPermiso } from '../controllers/permiso.controller'


const router = express.Router()



router.get('/', getPermiso)

router.get('/:id', getPermisoPorId)

router.post('/', postInsertarPermiso)

router.put('/', putActualizarPermiso)

router.delete('/:id', deleteEliminarPermiso)



export default router 