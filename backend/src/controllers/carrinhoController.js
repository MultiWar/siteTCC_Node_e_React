const connection = require('../database/connection');
const knex = require('knex');
const jwt =  require('jsonwebtoken');
const authconfig = require('../middlewares/auth');

module.exports = {
    async index(request, response) {
        const userId = request.userId;

        try {
            const pedidoEmAndamento = await connection('tblPedido')
                                .where({
                                    status: 'em andamento',
                                    idUser: userId
                                })
                                .first('tblPedido.idPedido');
            
            const coisasCarrinho = await connection('tblProduto')
                .join('tblDetalhesPedido', 'tblProduto.idProduto', '=', 'tblDetalhesPedido.idProduto')
                .where('tblDetalhesPedido.idPedido', (pedidoEmAndamento.idPedido))
                .select('tblProduto.idProduto', 'tblProduto.nomeProduto', 'tblProduto.descricao', 'tblProduto.categoria', 'tblDetalhesPedido.quantidade');

            return response.status(200).json(coisasCarrinho);
        }
        catch(err) {
            return response.status(500).send('Something went wrong')
        }
    },

    async adicionar(request, response) {
        const userId = request.userId;
        const idProduto = request.body.idProduto;
        const quantidade = request.body.quantidade;

        try {
            const pedidoEmAndamento = await connection('tblPedido')
                                .where({
                                    status: 'em andamento',
                                    idUser: userId
                                })
                                .first('tblPedido.idPedido');
            
            const teste = await connection('tblDetalhesPedido')
                .insert({
                    idPedido: pedidoEmAndamento.idPedido,
                    idProduto: idProduto,
                    quantidade: quantidade
                });
            return response.status(200).send('Nice');
        }
        catch(err) {
            return response.status(500).send('Something went wrong')
        }
    },

    async alterar(request, response) {
        const userId = request.userId;
        try {
            request.body.map(async produto => {
                const idProduto = produto.idProduto;
                const quantidade = produto.quantidade;                
                const pedidoEmAndamento = await connection('tblPedido')
                                    .where({
                                        status: 'em andamento',
                                        idUser: userId
                                    })
                                    .first('tblPedido.idPedido');
                const teste = await connection('tblDetalhesPedido')
                    .where({
                        idPedido: pedidoEmAndamento.idPedido,
                        idProduto
                    })
                    .update({
                        quantidade
                    });
            });
            return response.status(200).send('Nice');
        }
        catch(err) {
            return response.status(500).send('Something went wrong')
        }
    },

    async deletar(request, response) {
        const userId = request.userId;
        const idProduto = request.body.idProduto;

        try {
            const pedidoEmAndamento = await connection('tblPedido')
                                .where({
                                    status: 'em andamento',
                                    idUser: userId
                                })
                                .first('tblPedido.idPedido');
            
            const teste = await connection('tblDetalhesPedido')
                .where({
                    idPedido: pedidoEmAndamento.idPedido,
                    idProduto
                })
                .del('*');
            return response.status(200).send('Nice')
        }
        catch(err) {
            return response.status(500).send('Something went wrong')
        }
    }
}

/* SELECT tblProduto.nomeProduto, tblProduto.descricao, tblProduto.categoria, tblDetalhePedido.qtde
	FROM tblProduto JOIN tblDetalhePedido ON tblProduto.idProduto = tblDetalhePedido.idProduto
	WHERE tblDetalhePedido.idPedido = (
		SELECT TOP 1 idPedido FROM tblPedido WHERE status = 'em andamento' AND idUser = 'dasd'
    )

tblProduto.Nome, tblProduto.Descricao, tblProduto.Imagem, tblProduto.Categoria, tblDetalhesPedido.quantidade    
    
    
*/