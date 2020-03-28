const connection = require('../database/connection');

module.exports = {

    //list all incidetes
    async index (request, response) {
        const incidents = await connection('incidents').select('*');
        return response.json(incidents);
    },

    //create incident
    async create(request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            description,
            ong_id,
            title,
            value,
        });

        return response.json({id})

    }
};