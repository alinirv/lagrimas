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
