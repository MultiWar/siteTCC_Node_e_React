
exports.up = function(knex) {
  return knex.schema.createTable('tblFornecedor', function(table) {
      table.string('idFornecedor').notNullable();
      table.string('representante').notNullable();
      table.string('endereco').notNullable();
      table.integer('fone').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tblFornecedor');
};
