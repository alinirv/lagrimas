const express = require('express');
const app = express();
const port = 3000;

const router = require('../src/routes/routes')

app.use(express.static('public'));
app.use(express.json());
app.use('/',router);


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});