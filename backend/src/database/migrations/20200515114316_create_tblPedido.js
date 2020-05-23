
exports.up = function(knex) {
  return knex.schema.createTable('tblPedido', function(table) {
      table.increments('idPedido');
      table.integer('idProgEntrega');
      table.integer('idFuncionario');
      table.integer('idProduto');
      table.integer('idUser');
      table.decimal('precoFinal');
      table.datetime('dataPedido').notNullable();
      table.datetime('dataEntrega');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tblPedido');
};
