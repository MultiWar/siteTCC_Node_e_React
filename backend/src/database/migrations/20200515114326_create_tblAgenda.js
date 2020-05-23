
exports.up = function(knex) {
  return knex.schema.createTable('tblAgenda', function(table) {
      table.integer('idProduto');
      table.integer('idUser');
      table.time('intervalo').notNullable();
      table.time('duracao').notNullable();
      table.string('dose').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tblAgenda');
};
