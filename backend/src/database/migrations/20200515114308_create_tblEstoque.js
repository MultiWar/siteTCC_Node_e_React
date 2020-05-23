
exports.up = function(knex) {
  return knex.schema.createTable('tblEstoque', function(table) {
      table.integer('idProduto');
      table.integer('idUnidade');
      table.string('qtde');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tblEstoque');
};
