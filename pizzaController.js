const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  listarTodas: async (req, res) => {
    try {
      const pizzas = await prisma.pizza.findMany();
      res.json(pizzas);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao buscar as pizzas' });
    }
  },

  criar: async (req, res) => {
    try {
      const { nome, preco } = req.body;
      const novaPizza = await prisma.pizza.create({
        data: { nome, preco }
      });
      res.status(201).json(novaPizza);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao criar a pizza' });
    }
  },

  atualizar: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, preco } = req.body;

      const pizzaAtualizada = await prisma.pizza.update({
        where: { id: parseInt(id) },
        data: { nome, preco }
      });

      res.json(pizzaAtualizada);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao atualizar a pizza' });
    }
  },

  deletar: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.pizza.delete({
        where: { id: parseInt(id) }
      });
      res.json({ mensagem: 'Pizza deletada com sucesso!' });
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao deletar a pizza' });
    }
  }
};
