import { deleteMueblePorId, getBuscarMueble, getMateriasPrimasAsignadosMueble, getMueblePorId, getUsuariosAsignadosMueble, postInsertarMueble, postInsertarMuebleListados, putActualizarMueble } from '../controllers/mueble.controller'
import express from 'express'



const router = express.Router()

router.get('/', getBuscarMueble)
router.get('/:id', getMueblePorId)
router.get('/usuariosAsigandosMueble/:id', getUsuariosAsignadosMueble)
router.get('/materiasPrimasAsigandosMueble/:id', getMateriasPrimasAsignadosMueble)
router.post('/', postInsertarMueble)
router.post('/listados', postInsertarMuebleListados)
router.put('/', putActualizarMueble)
router.delete('/:id', deleteMueblePorId)



export default router 