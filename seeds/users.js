exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),

    knex('users').insert({
      username: 'aprilsikes',
      password: 'aprilsikes',
      email: 'aprilsikes@gmail.com',
      phone_number: '785-764-3812',
      avatar_image_url: 'http://free.clipartof.com/159-Female-Alien-Avatar-Character-BLANK-Free-Vector-Clipart-Illustration.jpg'
    }),
    knex('users').insert({
      username: 'frank',
      password: 'frank',
      email: 'frank@frank.com',
      phone_number: '123-456-7890',
      avatar_image_url: 'http://free.clipartof.com/174-Devil-Avatar-Character-With-Horns-And-Fangs-Free-Vector-Clipart-Illustration.jpg'
    })
  );
};
