
exports.up = function(knex) {
  return knex.schema.createTable('tblUnidade', function(table) {
      table.string('idUnidade').notNullable();
      table.string('nomeUnidade').notNullable();
      table.string('endereco').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tblUnidade');
};
