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


exports.remove = (req, res) => {
  const id = req.params.id;

  PlantModel.deletePlant(id, (err, changes) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!changes) return res.status(404).json({ error: 'Plant not found' });
    res.json({ message: 'Plant deleted' });
  });
};

exports.water = (req, res) => {
  const id = req.params.id;
  const date = new Date().toISOString().split("T")[0]; // только дата

  PlantModel.waterPlant(id, date, (err, changes) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!changes) return res.status(404).json({ error: "Plant not found" });
    res.json({ message: "Plant watered", lastWatDay: date });
  });
};
