
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tblProduto').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblProduto').insert([
        {'idFornecedor':'3fdg', 'nomeProduto': 'Rivotril', 'descricao':'Remédio para ansiedade', 'categoria':'remédio','tarja':'tarja preta', 'precoUnitario': '11', 'principioAtivo': 'seiLa', 'concentracao':'5mg/g'},
        {'idFornecedor':'kjac', 'nomeProduto': 'Dipirona', 'descricao':'Remédio para dor de cabeça', 'categoria':'remédio','tarja':'tarja vermelha', 'precoUnitario': '12', 'principioAtivo': 'seiLa', 'concentracao':'7mg/g'},
        {'idFornecedor':'89cf', 'nomeProduto': 'Dramin', 'descricao':'Remédio para enjoo', 'categoria':'remédio','tarja':'tarja azul', 'precoUnitario': '14', 'principioAtivo': 'seiLa', 'concentracao':'9mg/g'},
        {'idFornecedor':'aa02', 'nomeProduto': 'Clonazepam', 'descricao':'Remédio para seiLa', 'categoria':'remédio','tarja':'tarja branca', 'precoUnitario': '18', 'principioAtivo': 'seiLa', 'concentracao':'11mg/g'},
        {'idFornecedor':'bd0s', 'nomeProduto':'Gaze', 'descricao':'Tecido para curativos', 'categoria':'curativo','precoUnitario':'10'},
        {'idFornecedor':'bd0s', 'nomeProduto':'Mertiolate', 'descricao':'Fluido para ferimentos', 'categoria':'curativo','precoUnitario':'13'},
        {'idFornecedor':'bd0s', 'nomeProduto':'Manteiga de Cacau', 'descricao':'Usado para umedecer os lábios e prevenir rachaduras', 'categoria':'cuidado pessoal','precoUnitario':'16'},
        {'idFornecedor':'bd0s', 'nomeProduto':'ShampooB3', 'descricao':'Shampoo para cabelos cacheados', 'categoria':'higiene pessoal','precoUnitario':'19'}
      ]);
    });
};
