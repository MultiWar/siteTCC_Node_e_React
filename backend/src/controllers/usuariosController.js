const connection = require('../database/connection');
const knex = require('knex');
const rand = require('csprng');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const cors = require('cors');

module.exports = {
    async cadastro(req, resp) {
        const hash = crypto.createHash('sha256');        
        const { cpfD, senhaD, nomeD, foneD, enderecoD } = req.body;
        let saltI = rand(256);
        let senhaIntermed = saltI + senhaD;
        let senhaIntermed2 = hash.update(senhaIntermed)
        let senhaFinal = senhaIntermed2.digest("hex");   
        const id = rand(16);
        
        try {
            const [user] = await connection('tblUser')
                .where('cpf', cpfD)
                .select('*');
            if (!user) {
                await connection('tblUser').insert(
                    {'idUser':id, 'cpf': cpfD, 'senha': senhaFinal, 'salt': saltI, 'nome': nomeD, 'fone': foneD, 'endereco': enderecoD}
                );
                const token = jwt.sign({id: id, logged: true}, authConfig.secret, {
                    expiresIn: 86400
                });
                return resp.send(token);
            }
            else {
                return resp.send('Usuário já cadastrado');
            }
        }
        catch (err) {
            return console.log(err);
        }
    },
    async entrar(req, resp) {
        const hash = crypto.createHash('sha256');
        const {cpfD, senhaD} = req.body;
        const [user] = await connection('tblUser').where('cpf', cpfD).select('cpf');
        if (!user) {
            return resp.status(404).send({error: 'Usuário não encontrado'});
        }
        const [{idUser, salt, senha}] = await connection('tblUser')
            .where('cpf', cpfD)
            .select('idUser', 'salt', 'senha');
        let senhaI = salt + senhaD;
        let senhaF = hash.update(senhaI).digest("hex");
        if (senhaF == senha) {
            const token = jwt.sign({id: idUser, logged: true}, authConfig.secret, {
                expiresIn: 86400
            });
            return resp.send(token);
        }
        else {
            return resp.status(404).send({error: 'Senha incorreta'});
        }
    },
    async teste(req, resp) {
        const usuarios = await connection('tblUser')
            .select('*')
        return resp.json(usuarios)
    },
    async sair(req, resp) {
        resp.header = {};
        return resp.redirect('http://localhost:3000/')
    }
}