const db = require('../db');

module.exports = {
  getBoba(callback) {
    let queryStr = 'SELECT * FROM pairing';

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },
  postFavorites(params, callback) {
    let queryStr = 'INSERT INTO favorites (title, link, photo) values (?, ?, ?)';
    let queryArgs = [params.title, params.link, params.photo];

    db.query(queryStr, queryArgs, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },
  getFavorites(callback) {
    let queryStr = 'SELECT * FROM favorites';

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }
}
