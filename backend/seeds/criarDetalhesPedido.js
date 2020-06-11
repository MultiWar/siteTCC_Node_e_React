
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tblDetalhesPedido').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblDetalhesPedido').insert([
        {'idPedido': '87df', 'idProduto': '1', 'quantidade': '2'},
        {'idPedido': 'sda7', 'idProduto': '2', 'quantidade': '2'},
        {'idPedido': 'gsdg', 'idProduto': '3', 'quantidade': '4'},
        {'idPedido': '98sd', 'idProduto': '4', 'quantidade': '6'},
        {'idPedido': '1wd2', 'idProduto': '1', 'quantidade': '3'},
        {'idPedido': '1wd2', 'idProduto': '2', 'quantidade': '4'},
        {'idPedido': '1wd2', 'idProduto': '3', 'quantidade': '3'},
        {'idPedido': '1wd2', 'idProduto': '4', 'quantidade': '2'},
        {'idPedido': '97s8', 'idProduto': '4', 'quantidade': '1'},
        {'idPedido': 'bnc5', 'idProduto': '1', 'quantidade': '2'},
        {'idPedido': 'sda6', 'idProduto': '2', 'quantidade': '1'},
        {'idPedido': 'hjgf', 'idProduto': '3', 'quantidade': '4'}
      ]);
    });
};
