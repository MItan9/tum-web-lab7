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

const deletePlant = (id, callback) => {
  db.run('DELETE FROM plants WHERE id = ?', [id], function (err) {
    callback(err, this.changes);
  });
};

const waterPlant = (id, date, callback) => {
  db.run(
    'UPDATE plants SET lastWatDay = ? WHERE id = ?',
    [date, id],
    function (err) {
      callback(err, this.changes);
    }
  );
};

module.exports = {
  getAllPlants,
  createPlant,
  deletePlant,
  waterPlant
};
