const connection = require('../database/connection');

module.exports = {

    //list all incidetes paginado
    async index (request, response) {

        const { page = 1 } = request.query;

        //consta os incidents retornando o total
        const [count] = await connection('incidents').count();

        //paginação e join com outra tabela para ve dados de outra tabela
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page -1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        // passa o total de registro pelo cabeçaçho da requisição
        response.header('X-Total-Count', count['count(*)']);
       
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

    },
    // delete incident by id

    async delete(request, response){
        const { id } = request.params;
        //recebe o id da ong, para depois verificar se o incidente a ser deletado pertence a ong
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if(incident.ong_id != ong_id){
            return response.status(401).json({error: 'Operation not permitted'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();

    }

};