const connection = require('../database/connection');
const axios = require ('axios');
const jwt = require('jsonwebtoken');

module.exports = {
    async index(req, resp) {
        /* const cpf = req.headers.cpf; */
        const [dados] = await connection('tblUser')
        .where('idUser', req.userId)
        .select([
            'nome',
            'cpf',
            'fone',
            'endereco'
        ]);
        return resp.json(dados);
    },
    async editAccountConfig (req, resp) {
        const {foneD, enderecoD} = req.body;
        try {
            await connection('tblUser')
                .where('idUser', req.userId)
                .update({'fone':foneD, 'endereco':enderecoD});
            return resp.send(`SUCESSO, ${req.userId}!`);
        }
        catch (err) {
            return resp.send(err);
        }        
    }
}