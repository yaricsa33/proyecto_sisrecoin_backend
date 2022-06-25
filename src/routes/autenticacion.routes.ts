
import express from 'express'
import { postAutenticacion } from '../controllers/autenticacion.controller'

const router = express.Router()

router.post('/', postAutenticacion)

export default router 