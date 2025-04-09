const express = require('express');
const cors = require('cors');
const app = express();
const rotas = require('./routes');

app.use(cors());
app.use(express.json());
app.use(rotas);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
