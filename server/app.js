const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
    res.send('Servidor Express funcionando!');
  });
  
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });