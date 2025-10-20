const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Servir arquivos estáticos da raiz
app.use(express.static(path.join(__dirname, '')));

// Endpoint para obter a configuração do Firebase
const firebaseConfig = require('./firebaseConfig');

app.get('/api/firebase-config', (req, res) => {
  res.json(firebaseConfig);
});

app.listen(port, () => {
  console.log(`Servidor a executar em http://localhost:${port}`);
});