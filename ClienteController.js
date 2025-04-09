import ClienteService from '../services/ClienteService.js'

const ClienteController = {
  create: async (req, res) => {
    const data = req.body
    const cliente = await ClienteService.create(data)
    res.json(cliente)
  },

  findAll: async (req, res) => {
    const clientes = await ClienteService.findAll()
    res.json(clientes)
  },

  findById: async (req, res) => {
    const cliente = await ClienteService.findById(Number(req.params.id))
    res.json(cliente)
  },

  update: async (req, res) => {
    const cliente = await ClienteService.update(Number(req.params.id), req.body)
    res.json(cliente)
  },

  remove: async (req, res) => {
    await ClienteService.remove(Number(req.params.id))
    res.sendStatus(204)
  }
}

export default ClienteController