
exports.up = function(knex) {
  return knex.schema.createTable('tblUser', function(table) {
      table.string('idUser').notNullable();
      table.string('cpf').notNullable().unique();
      table.string('senha').notNullable();
      table.string('salt').notNullable();
      table.string('nome').notNullable();
      table.integer('fone');
      table.string('endereco');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tblUser');
};
