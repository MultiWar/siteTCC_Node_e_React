
exports.up = function(knex) {
    return knex.schema.createTable('tblCarrinho', function(table) {
        table.string('cartId').notNullable();
        table.string('userId').notNullable();
        table.string()
    })
};

exports.down = function(knex) {
  
};
