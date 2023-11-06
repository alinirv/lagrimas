const fs = require('fs');
const lagrimas = require("../model/lagrimas.json");

exports.getLagrimas = (req, res) => {
  res.json(lagrimas);
};

exports.createLagrima = (req, res) => {
  const lagrima = {
      id: Date.now(),
      nome: req.body.nome,
      categoria: req.body.categoria,
      autor: req.body.autor
  };

  lagrimas.push(lagrima);

  fs.writeFile("src/model/lagrimas.json", JSON.stringify(lagrimas), (err) => {
      if (err) return res.status(500).send("Error writing file.");
      res.json(lagrima);
  });
};

exports.getLagrimaById = (req, res) => {
  const id = req.params.id;
  const lagrima = lagrimas.find(l => l.id === parseInt(id));
 
  if (!lagrima) return res.status(404).send("Lagrima not found");
 
  res.json(lagrima);
 };

exports.updateLagrima = (req, res) => {
  const id = req.params.id;
  const lagrima = req.body;
  const index = lagrimas.findIndex(l => l.id === parseInt(id));

  if (index === -1) return res.status(404).send("Lagrima não encontrada");

  lagrimas[index] = lagrima;

  fs.writeFile("src/model/lagrimas.json", JSON.stringify(lagrimas), (err) => {
      if (err) return res.status(500).send("Erro ao gravar arquivo.");
      res.json(lagrima);
  });
};