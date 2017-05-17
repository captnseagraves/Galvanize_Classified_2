
exports.up = function(knex) {
    return knex.schema.createTable('classifieds', (tbl) => {
        tbl.increments();
        tbl.string('title').notNullable();
        tbl.string('description').notNullable();
        tbl.decimal('price').notNullable();
        tbl.string('item_image').notNullable();
        tbl.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        tbl.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('classifieds');
};
