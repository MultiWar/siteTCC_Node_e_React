
exports.up = function(knex) {
  knex.schema.table('tblProduto', function(table) {
    table.foreign('idFornecedor').references('idFornecedor').inTable('tblFornecedor');
  });
  knex.schema.table('tblFuncionario', function(table) {
    table.foreign('idUnidade').references('idUnidade').inTable('tblUnidade');
  });
  knex.schema.table('tblEstoque', function(table) {
      table.foreign('idProduto').references('idProduto').inTable('tblProduto');
      table.foreign('idUnidade').references('idUnidade').inTable('tblUnidade');
  });
  knex.schema.table('tblPedido', function(table) {
    table.foreign('idProgEntrega').references('idProgEntrega').inTable('tblProgEntrega');
    table.foreign('idFuncionario').references('idFuncionario').inTable('tblFuncionario');
    table.foreign('idProduto').references('idProduto').inTable('tblProduto');
    table.foreign('idUser').references('idUser').inTable('tblUser');
  });
  knex.schema.table('tblAgenda', function(table) {
    table.foreign('idProduto').references('idProduto').inTable('tblProduto');
    table.foreign('idUser').references('idUser').inTable('tblUser');
  });
  knex.schema.table('tblProgEntrega', function(table) {
    table.foreign('idProduto').references('idProduto').inTable('tblProduto');
    table.foreign('idUser').references('idUser').inTabela('tblProduto');
  });
  knex.schema.table('tblDetalhePedido', function(table) {
    table.foreign('idPedido').references('idPedido').inTable('tblPedido');
    table.foreign('tblProduto').references('idProduto').inTable('tblProduto');
  });
};

exports.down = function(knex) {
  
};
