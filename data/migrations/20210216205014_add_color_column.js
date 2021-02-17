
exports.up = function(knex) {
    return knex.schema.table("dealers", table => {
        table.string("color", 20);
    });
};

exports.down = function(knex) {
    return knex.schema.table("dealers", table => {
        table.dropColumn("color");
    });
};
