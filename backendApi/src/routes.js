const express = require('express');
const OngController = require('./controllers/ongController');
const routes = express.Router();



// list all ongs
routes.get('/ongs', OngController.index);
// create new ongs
routes.post('/ongs', OngController.create);

module.exports = routes;