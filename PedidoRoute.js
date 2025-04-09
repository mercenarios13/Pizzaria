import { Router } from 'express'
import PedidoController from '../controllers/PedidoController.js'

const router = Router()

router.post('/', PedidoController.criarPedido)
router.get('/', PedidoController.listarPedidos)
router.get('/:id', PedidoController.buscarPedidoPorId)

export default router
