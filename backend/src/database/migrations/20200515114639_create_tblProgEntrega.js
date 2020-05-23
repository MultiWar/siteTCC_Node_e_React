
exports.up = function(knex) {
  return knex.schema.createTable('tblProgEntrega', function(table) {
      table.increments('idProgEntrega');
      table.integer('idProduto');
      table.integer('idUser');
      table.time('intervaloEntrega').notNullable();
      table.date('inicioProg').notNullable();
      table.date('fimProg').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tblProgEntrega');
};
