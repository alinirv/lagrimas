const lagrimas = require("../model/lagrimas.json");

exports.getLagrimas = (req, res) => {
  res.json(lagrimas);
};
