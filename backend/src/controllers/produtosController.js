const connection = require('../database/connection');

module.exports = {
    async index(req, resp) {
        const categoria = req.params.categoria;
        if(!categoria){
            const resultados = await connection('tblProduto')
                .distinct('categoria');
            return resp.json(resultados);
        }
        else {
            const resultados = await connection('tblProduto')
                .where('categoria', 'like', categoria)
                .select([
                    'nomeProduto',
                    'descricao',
                    'categoria',
                    'precoUnitario'
                ]);
            return resp.json(resultados);
        }
    },
    async tarjas(req, resp) {
        const tarja = req.params.tarja;
        if(!tarja) {
            const resultados = await connection('tblProduto')
                .distinct('tarja');
            return resp.json(resultados);
        }
        else {
            const resultados = await connection('tblProduto')
                .where('tarja', 'like', tarja)
                .select([
                    'nomeProduto',
                    'descricao',
                    'categoria',
                    'precoUnitario'
                ]);
            return resp.json(resultados);
        }
    },
    async principio(req, resp) {
        const principioAtivo = req.params.princAtiv;
        if(!principioAtivo) {
            const resultados = await connection('tblProduto')
                .distinct('principioAtivo');
            return resp.json(resultados);
        }
        const resultados = await connection('tblProduto')
            .where('principioAtivo', 'like', principioAtivo)
            .select([
                'nomeProduto',
                'descricao',
                'categoria',
                'precoUnitario'
            ]);
        return resp.json(resultados);
    },
    async remedio (req, resp) {
        const tarja = req.params.tarja;
        const nomeRemedio = req.params.nome;

        const resultados = await connection('tblProduto')
            .where('nomeProduto', 'like', nomeRemedio)
            .select([
                'nomeProduto',
                'descricao',
                'categoria',
                'tarja',
                'principioAtivo',
                'precoUnitario',
                'concentracao'
            ]);

        return resp.json(resultados);
    }
}