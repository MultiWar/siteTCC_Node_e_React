const connection = require('../database/connection');

module.exports = {
    async index(req, resp) {
        const remedios = await connection('tblProduto')
            .select([ 
                'nomeProduto',
                'descricao',
                'categoria',
                'precoUnitario',
                'tarja'
             ]);
        return resp.json(remedios);
    },

    async busca(req, resp) {
        const busc = req.query.nome;
        if (!busc) {
            const resultados = await connection('tblProduto')
                .select([
                    'nomeProduto',
                    'descricao',
                    'categoria',
                    'tarja',
                    'precoUnitario'
                ]);
            return resp.json(resultados);
        }
        else {
        const nome = busc[0].toUpperCase() + busc.slice(1);
        const resultados = await connection('tblProduto')
            .where('nomeProduto', nome)
            .select([
                'nomeProduto',
                'descricao',
                'categoria',
                'precoUnitario'
            ]);

        return resp.json(resultados);
        }
    },
    
    async carrinho(req, resp) {
        
    },
}