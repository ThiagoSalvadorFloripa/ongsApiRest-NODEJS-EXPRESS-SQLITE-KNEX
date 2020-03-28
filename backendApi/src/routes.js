const express = require('express');
const OngController = require('./controllers/ongController');
const IncidentsController = require('./controllers/incidentsController');
const ProfilleController = require('./controllers/profilleController');
const SessionController = require('./controllers/sessionController');


const routes = express.Router();



// list all ongs
routes.get('/ongs', OngController.index);
// create new ongs
routes.post('/ongs', OngController.create);

// create new Incidents
routes.post('/incidents', IncidentsController.create);
// list all incidents
routes.get('/incidents', IncidentsController.index);
// delite by id incidents
routes.delete('/incidents/:id', IncidentsController.delete);

// retorna todos os casos de uma determinada ong
routes.get('/profile', ProfilleController.index)

// login
routes.post('/session', SessionController.create)

module.exports = routes;