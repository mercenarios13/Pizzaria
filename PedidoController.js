import PedidoService from '../services/PedidoService.js'

async function criarPedido(req, res) {
  try {
    const pedido = await PedidoService.create(req.body)
    res.status(201).json(pedido)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function listarPedidos(req, res) {
  try {
    const pedidos = await PedidoService.findAll()
    res.status(200).json(pedidos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function buscarPedidoPorId(req, res) {
  try {
    const pedido = await PedidoService.findById(Number(req.params.id))
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido não encontrado' })
    }
    res.status(200).json(pedido)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export default {
  criarPedido,
  listarPedidos,
  buscarPedidoPorId
}
