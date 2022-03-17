const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const Controller = require('./controller')

app.use(express.static('./client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/boba', (req, res) => {
  Controller.getBoba(req, res);
})

app.post('/favorites', (req, res) => {
  Controller.postFavorites(req, res);
})

app.get('/favorites', (req, res) => {
  Controller.getFavorites(req, res);
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});