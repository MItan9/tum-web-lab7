const db = require('../database');

const getAllPlants = (limit, offset, callback) => {
  db.all(
    'SELECT * FROM plants LIMIT ? OFFSET ?',
    [limit, offset],
    callback
  );
};

const createPlant = (plant, callback) => {
  const { name, type, waterFreq, lastWatDay, image, favourite = 0 } = plant;
  db.run(
    'INSERT INTO plants (name, type, waterFreq, lastWatDay, image, favourite) VALUES (?, ?, ?, ?, ?, ?)',
    [name, type, waterFreq, lastWatDay, image, favourite],
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

const favourite = (id, fav, callback) => {
  db.run(
    'UPDATE plants SET favourite = ? WHERE id = ?',
    [fav, id],
    function (err) {
      callback(err, this.changes);
    }
  );
};

module.exports = {
  getAllPlants,
  createPlant,
  deletePlant,
  waterPlant,
  favourite
};
