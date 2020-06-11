
exports.up = function(knex) {
    return knex.schema.createTable('tblDetalhesPedido', function(table) {
        table.string('idPedido').notNullable();
        table.string('idProduto').notNullable();
        table.integer('quantidade').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tblDetalhesPedido');
};
