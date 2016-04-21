exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),

    knex('users').insert({
      facebook_id: null,
      first_name: 'April',
      last_name: 'Sikes',
      name: '',
      password: 'aprilsikes',
      email: 'aprilsikes@gmail.com',
      phone_number: '785-764-3812',
      profile_image_url: '',
      is_admin: false,
      avatar_image_url: 'http://free.clipartof.com/159-Female-Alien-Avatar-Character-BLANK-Free-Vector-Clipart-Illustration.jpg'
    }),
    knex('users').insert({
      facebook_id: null,
      first_name: 'Frank',
      last_name: 'Buffay',
      name: '',
      password: 'frank',
      email: 'frank@frank.com',
      phone_number: '123-456-7890',
      profile_image_url: '',
      is_admin: false,
      avatar_image_url: 'http://free.clipartof.com/174-Devil-Avatar-Character-With-Horns-And-Fangs-Free-Vector-Clipart-Illustration.jpg'
    })
  );
};
