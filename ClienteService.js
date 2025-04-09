import prisma from '../utils/prisma.js'


const ClienteService = {
  create: (data) => prisma.cliente.create({ data }),
  findAll: () => prisma.cliente.findMany(),
  findById: (id) => prisma.cliente.findUnique({ where: { id } }),
  update: (id, data) => prisma.cliente.update({ where: { id }, data }),
  remove: (id) => prisma.cliente.delete({ where: { id } })
}

export default ClienteService
