exports.up = function(knex, Promise) {
  return knex.schema.createTable('orgs', function(table){
    table.increments();
    table.string('facebook_id').unique();
    table.string('org_name');
    table.string('org_url');
    table.string('image_url');
    table.text('profile_image_url');
    table.string('email');
    table.string('password');
    table.string('category');
    table.string('street1');
    table.string('street2');
    table.string('city');
    table.string('state');
    table.integer('zip');
    table.boolean('is_admin');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orgs');
};
