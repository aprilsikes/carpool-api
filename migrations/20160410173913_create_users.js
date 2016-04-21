exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('facebook_id').unique();
    table.string('first_name');
    table.string('last_name');
    table.string('name');
    table.string('password');
    table.string('email');
    table.string('phone_number');
    table.string('avatar_image_url');
    table.text('profile_image_url');
    table.boolean('is_admin');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
