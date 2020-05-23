
exports.up = function(knex) {
  return knex.schema.createTable('tblProduto', function (table) {
      table.increments('idProduto');
      table.string('idFornecedor').notNullable();
      table.string('nomeProduto').notNullable();
      table.string('descricao').notNullable();
      table.string('categoria').notNullable();
      table.string('tarja');
      table.decimal('precoUnitario').notNullable();
      table.string('principioAtivo');
      table.string('concentracao');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tblProduto');
};
