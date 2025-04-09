const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async listarTodas() {
    return await prisma.pizza.findMany();
  },

  async criar(data) {
    return await prisma.pizza.create({ data });
  },

  async atualizar(id, data) {
    return await prisma.pizza.update({
      where: { id },
      data
    });
  },

  async deletar(id) {
    return await prisma.pizza.delete({
      where: { id }
    });
  }
};
