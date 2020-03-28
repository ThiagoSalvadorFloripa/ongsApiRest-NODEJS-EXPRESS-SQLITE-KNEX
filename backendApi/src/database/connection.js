const Knex = require('knex');
const configuration = require('../../knexfile');

// conectando  com banco de dados
const connection = Knex(configuration.development);

module.exports = connection;