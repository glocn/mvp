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
  },
  postFavorites(req, res) {
   let params = req.body;
    Model.postFavorites(params, (err, results) => {
      if (err) {
        res.status(500).send();
      } else {
        res.status(201).send();
      }
    })
  },
  getFavorites(req, res) {
     Model.getFavorites((err, results) => {
       if (err) {
         res.status(404).send();
       } else {
         res.status(200).send(results);
       }
     })
   }
}