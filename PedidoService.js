import prisma from '../utils/prisma.js'

const PedidoService = {
  create: async (data) => {
    const { clienteId, pizzas } = data
    const pedido = await prisma.pedido.create({
      data: {
        clienteId,
        pizzas: {
          create: pizzas.map(pizzaId => ({
            pizza: { connect: { id: pizzaId } }
          }))
        }
      },
      include: {
        pizzas: {
          include: {
            pizza: true
          }
        }
      }
    })
    return pedido
  },

  findAll: () => prisma.pedido.findMany(),

  findById: (id) =>
    prisma.pedido.findUnique({
      where: { id },
      include: {
        cliente: true,
        pizzas: {
          include: {
            pizza: true
          }
        }
      }
    })
}

export default PedidoService
