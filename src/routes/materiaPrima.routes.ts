
import express from 'express'
import { deleteMateriaPrimaPorId, getbuscarMateriaPrimaPorId, getMateriaPrima, postInsertarMateriaPrima, putActualizarMateriaPrima } from '../controllers/materiaPrima.controller'

const router = express.Router()


router.get('/', getMateriaPrima)
router.get('/:id', getbuscarMateriaPrimaPorId)
router.post('/', postInsertarMateriaPrima)
router.put('/', putActualizarMateriaPrima)
router.delete('/:id', deleteMateriaPrimaPorId)


export default router 