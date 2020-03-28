const express = require('express');

const routes = express.Router();

routes.post('/ongs', (request, response) => {
    

    return response.json({
        evento: 'Primeira aplicaçãp Node+ React',
        autor: 'Thiago Salvador'
    });
});

module.exports = routes;