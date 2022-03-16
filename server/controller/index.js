const Model = require('../model');

module.exports = {
  getBoba(req, res) {

    Model.getBoba((err, results) => {
      if (err) {
        res.status(404).send();
      } else {
        res.status(200).send(results);
      }
    })
  }
}