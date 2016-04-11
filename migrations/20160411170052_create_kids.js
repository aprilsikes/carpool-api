exports.up = function(knex, Promise) {
  return knex.schema.createTable('kids', function(table){
    table.increments();
    table.string('kid_name');
    table.string('school');
    table.integer('users_id');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kids');
};
