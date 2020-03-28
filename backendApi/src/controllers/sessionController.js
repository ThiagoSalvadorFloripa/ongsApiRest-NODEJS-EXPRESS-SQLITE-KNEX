const connection = require('../database/connection');

// recebe o id de ong e verifica se ja existe na base (Efetua login)
module.exports = {
    async create(request, response){
        const {id} = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();
        
        if(!ong){
            return response.status(400).json({error: 'No ONG found with ID'});
        }

        return response.json(ong);
    }

}
