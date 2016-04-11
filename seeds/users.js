exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),

    knex('users').insert({
      username: 'aprilsikes',
      password: 'aprilsikes',
      email: 'aprilsikes@gmail.com',
      phone_number: '785-764-3812'
    }),
    knex('users').insert({
      username: 'frank',
      password: 'frank',
      email: 'frank@frank.com',
      phone_number: '123-456-7890'
    })
  );
};
