const express = require('express');
const app = express();
const port = 3000;

const router = require('../src/routes/routes.js')

app.use(express.static('public'));
app.use(express.json());
app.use('/',router);



app.get('/', (req, res) => {
    res.send('Servidor Express funcionando!');
  });
  
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });