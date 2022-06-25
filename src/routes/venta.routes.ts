import { deleteVentaPorId, getbuscarVentaPorId, getMueblesParaVentas, getVenta, postInsertarVenta, postInsertarVentaMueble, putActualizarVenta } from '../controllers/venta.controller'

import express from 'express'
const router = express.Router()

router.get('/', getVenta)
router.get('/mueblesVentas', getMueblesParaVentas)
router.get('/:id', getbuscarVentaPorId)
router.post('/', postInsertarVenta)
router.post('/listados', postInsertarVentaMueble)
router.put('/', putActualizarVenta)
router.delete('/:id', deleteVentaPorId)






export default router 