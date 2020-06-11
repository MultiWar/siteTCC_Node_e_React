
exports.up = function (knex) {
  return knex.schema.createTable('tblPedido', function (table) {
    table.string('idPedido').notNullable();
    table.string('idUser');
    table.string('idProgEntrega')
    table.string('idFuncionario')
    table.decimal('precoFinal');
    table.datetime('dataPedido');
    table.string('status');
    table.datetime('dataEntrega');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('tblPedido');
};
