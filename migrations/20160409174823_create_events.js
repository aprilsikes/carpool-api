exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function(table){
    table.increments();
    table.string('event_name');
    table.integer('groups_id');
    table.string('date');
    table.string('time');
    table.string('location');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
