// models/plantModel.js
const db = require('../database');

const getAllPlants = (limit, offset, callback) => {
  db.all(
    'SELECT * FROM plants LIMIT ? OFFSET ?',
    [limit, offset],
    callback
  );
};

module.exports = {
  getAllPlants,
  
};
