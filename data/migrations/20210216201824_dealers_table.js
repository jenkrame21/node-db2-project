
exports.up = function(knex) {
    return knex.schema.createTable("dealers", table => {
        table.increments();
        table.text("vin", 17).unique().notNullable();
        table.text("make").notNullable();
        table.text("model").notNullable();
        table.decimal("mileage").notNullable();
        table.text("transmissionType");
        table.text("titleStatus");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("dealers");
};
