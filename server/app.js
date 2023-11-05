const express = require('express');
const app = express();
const port = 3000;

const router = require('../src/routes/routes')

app.use(express.json());
app.use('/',router);


// Middleware para definir o tipo MIME correto para arquivos JavaScript
app.use('../public/script', (req, res, next) => {
  res.setHeader('Content-Type', 'text/javascript');
  next();
});

  
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});