const PlantModel = require('../models/plantModel');

exports.getAll = (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const offset = parseInt(req.query.offset) || 0;

  PlantModel.getAllPlants(limit, offset, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.create = (req, res) => {
  const newPlant = req.body;
  PlantModel.createPlant(newPlant, (err, id) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id, ...newPlant });
  });
};