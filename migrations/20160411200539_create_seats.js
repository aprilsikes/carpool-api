exports.up = function(knex, Promise) {
  return knex.schema.createTable('seats', function(table){
    table.increments();
    table.string('username');
    table.integer('number_of_seats');
    table.integer('events_id');
    table.boolean('seat_accepted');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('seats');
};
