const express = require('express');
const router = express.Router();
const pizzaRoutes = require('./pizzaRoutes');

router.use('/pizzas', pizzaRoutes);

module.exports = router;
