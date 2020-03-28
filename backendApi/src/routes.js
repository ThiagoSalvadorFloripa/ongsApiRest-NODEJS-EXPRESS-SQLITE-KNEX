const express = require('express');
const OngController = require('./controllers/ongController');
const IncidentsController = require('./controllers/incidentsController');


const routes = express.Router();



// list all ongs
routes.get('/ongs', OngController.index);
// create new ongs
routes.post('/ongs', OngController.create);

// create new Incidents
routes.post('/incidents', IncidentsController.create);
// list all incidents
routes.get('/incidents', IncidentsController.index);

module.exports = routes;