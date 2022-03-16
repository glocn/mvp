const db = require('../db');

module.exports = {
  getBoba(callback) {
    let queryStr = 'SELECT * FROM pairing';

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        console.log('model', results);
        callback(null, results);
      }
    })
  }
}
