exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('groups').del(),

    knex('groups').insert({
      group_name: 'Chess Club',
      orgs_id: 1
    }),
    knex('groups').insert({
      group_name: 'Track Team',
      orgs_id: 1
    }),
    knex('groups').insert({
      group_name: 'Excalibur',
      orgs_id: 1
    }),
    knex('groups').insert({
      group_name: 'Chess Club',
      orgs_id: 2
    }),
    knex('groups').insert({
      group_name: 'Garden Club',
      orgs_id: 2
    }),
    knex('groups').insert({
      group_name: 'Robotics',
      orgs_id: 2
    }),
    knex('groups').insert({
      group_name: 'Chess Club',
      orgs_id: 3
    }),
    knex('groups').insert({
      group_name: 'Misc.',
      orgs_id: 3
    }),
    knex('groups').insert({
      group_name: 'Swim Team',
      orgs_id: 3
    }),
    knex('groups').insert({
      group_name: 'Brasil',
      orgs_id: 4
    }),
    knex('groups').insert({
      group_name: 'Kings',
      orgs_id: 4
    }),
    knex('groups').insert({
      group_name: 'Cruzeiro',
      orgs_id: 4
    }),
    knex('groups').insert({
      group_name: 'Troop 1',
      orgs_id: 5
    }),
    knex('groups').insert({
      group_name: 'Troop 2',
      orgs_id: 5
    }),
    knex('groups').insert({
      group_name: 'Troop 3',
      orgs_id: 5
    }),
    knex('groups').insert({
      group_name: 'First Time Potter',
      orgs_id: 6
    }),
    knex('groups').insert({
      group_name: 'Act it Out!',
      orgs_id: 6
    }),
    knex('groups').insert({
      group_name: 'Afro-Latin Fusion',
      orgs_id: 6
    })
  );
};
