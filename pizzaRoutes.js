const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaController');

router.get('/', pizzaController.listarTodas);
router.post('/', pizzaController.criar);
router.put('/:id', pizzaController.atualizar);
router.delete('/:id', pizzaController.deletar);

module.exports = router;
