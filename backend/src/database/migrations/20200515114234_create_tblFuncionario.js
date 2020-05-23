
exports.up = function(knex) {
  return knex.schema.createTable('tblFuncionario', function(table) {
    table.string('idFuncionario').notNullable();
    table.string('idUnidade').notNullable();
    table.string('cargo').notNullable();
    table.string('nomeFuncionario').notNullable();
    table.string('cpf').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tblFuncionario');
};
