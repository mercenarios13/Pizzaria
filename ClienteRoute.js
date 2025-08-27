import { Router } from 'express'
import ClienteController from '../controllers/ClienteController.js'

const router = Router()

router.post('/', ClienteController.create)
router.get('/', ClienteController.findAll)
router.get('/:id', ClienteController.findById)
router.put('/:id', ClienteController.update)
router.delete('/:id', ClienteController.remove)

export default router
