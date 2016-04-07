exports.up = function(knex, Promise) {
  return knex.schema.createTable('groups', function(table){
    table.increments();
    table.string('group_name');
    table.integer('orgs_id');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('groups');
};
