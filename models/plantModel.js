const db = require('../database');

const getAllPlants = (limit, offset, callback) => {
  db.all(
    'SELECT * FROM plants LIMIT ? OFFSET ?',
    [limit, offset],
    callback
  );
};

const createPlant = (plant, callback) => {
  const { name, type, waterFreq, lastWatDay, image } = plant;
  db.run(
    'INSERT INTO plants (name, type, waterFreq, lastWatDay, image) VALUES (?, ?, ?, ?, ?)',
    [name, type, waterFreq, lastWatDay, image],
    function (err) {
      callback(err, this?.lastID);
    }
  );
};

module.exports = {
  getAllPlants,
  createPlant,

  
};
