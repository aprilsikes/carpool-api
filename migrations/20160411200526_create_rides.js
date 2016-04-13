exports.up = function(knex, Promise) {
  return knex.schema.createTable('rides', function(table){
    table.increments();
    table.string('kid_name');
    table.string('school');
    table.integer('events_id');
    table.boolean('ride_offered');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rides');
};
