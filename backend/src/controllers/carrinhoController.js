const connection = require('../database/connection');
const knex = require('knex');
const jwt =  require('jsonwebtoken');
const authconfig = require('../middlewares/auth');

module.exports = {
    async index(request, response) {
        const userId = request.userId;

        const pedidoEmAndamento = await connection('tblPedido')
                            .where({
                                status: 'em andamento',
                                idUser: userId
                            })
                            .first('tblPedido.idPedido');
        
        const coisasCarrinho = await connection('tblProduto')
            .join('tblDetalhesPedido', 'tblProduto.idProduto', '=', 'tblDetalhesPedido.idProduto')
            .where('tblDetalhesPedido.idPedido', (pedidoEmAndamento.idPedido))
            .select('tblProduto.nomeProduto', 'tblProduto.descricao', 'tblProduto.categoria', 'tblDetalhesPedido.quantidade');

        return response.json(coisasCarrinho);
    },

    async adicionar(request, response) {
        const userId = request.userId;
        const produtoId = request.body.produtoId;
        const quantidade = request.body.quantidade;

        const pedidoEmAndamento = await connection('tblPedido')
                            .where({
                                status: 'em andamento',
                                idUser: userId
                            })
                            .first('tblPedido.idPedido');
        
        const teste = await connection('tblDetalhesPedido')
            .insert({
                idPedido: pedidoEmAndamento.idPedido,
                idProduto: produtoId,
                quantidade: quantidade
            });
        return response.json(teste);
    },

    async alterar(request, response) {
        const userId = request.userId;
        const produtoId = request.body.produtoId;
        const quantidade = request.body.quantidade;

        const pedidoEmAndamento = await connection('tblPedido')
                            .where({
                                status: 'em andamento',
                                idUser: userId
                            })
                            .first('tblPedido.idPedido');
        const teste = await connection('tblDetalhesPedido')
            .where({
                idPedido: pedidoEmAndamento.idPedido,
                idProduto: produtoId
            })
            .update({
                quantidade: quantidade
            });
        return response.json(teste);
    },

    async deletar(request, response) {
        const userId = request.userId;
        const produtoId = request.body.produtoId;

        const pedidoEmAndamento = await connection('tblPedido')
                            .where({
                                status: 'em andamento',
                                idUser: userId
                            })
                            .first('tblPedido.idPedido');
        
        const teste = await connection('tblDetalhesPedido')
            .where({
                idPedido: pedidoEmAndamento.idPedido,
                idProduto: produtoId
            })
            .del('*');
        return response.json(teste);
    }
}

/* SELECT tblProduto.nomeProduto, tblProduto.descricao, tblProduto.categoria, tblDetalhePedido.qtde
	FROM tblProduto JOIN tblDetalhePedido ON tblProduto.idProduto = tblDetalhePedido.idProduto
	WHERE tblDetalhePedido.idPedido = (
		SELECT TOP 1 idPedido FROM tblPedido WHERE status = 'em andamento' AND idUser = 'dasd'
    )

tblProduto.Nome, tblProduto.Descricao, tblProduto.Imagem, tblProduto.Categoria, tblDetalhesPedido.quantidade    
    
    
*/