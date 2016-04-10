exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('events').del(),

    knex('events').insert({
      event_name: 'Lawrence High School Chess Tournament',
      groups_id: 1,
      date: 'April 21, 2016',
      time: '9:00am',
      location: 'Lawrence High School'
    }),
    knex('events').insert({
      event_name: 'State Chess Tournament',
      groups_id: 1,
      date: 'April 22, 2016',
      time: '9:00am',
      location: 'KU Union'
    }),
    knex('events').insert({
      event_name: 'LMCMS Track Meet',
      groups_id: 2,
      date: 'April 23, 2016',
      time: '2:30pm',
      location: 'Liberty Memorial Central Middle School'
    }),
    knex('events').insert({
      event_name: 'WMS Track Meet',
      groups_id: 2,
      date: 'April 24, 2016',
      time: '10:00am',
      location: 'West Middle School'
    }),
    knex('events').insert({
      event_name: 'Lawrence High School Chess Tournament',
      groups_id: 4,
      date: 'April 21, 2016',
      time: '9:00am',
      location: 'Lawrence High School'
    }),
    knex('events').insert({
      event_name: 'State Chess Tournament',
      groups_id: 4,
      date: 'April 22, 2016',
      time: '9:00am',
      location: 'KU Union'
    }),
    knex('events').insert({
      event_name: 'Spring Concert',
      groups_id: 3,
      date: 'April 25, 2016',
      time: '9:00am',
      location: 'Liberty Memorial Central Middle School'
    }),
    knex('events').insert({
      event_name: 'All-State Rehearsal',
      groups_id: 3,
      date: 'April 26, 2016',
      time: '3:15pm',
      location: 'Liberty Memorial Central Middle School'
    }),
    knex('events').insert({
      event_name: 'Spring Clean-Out-the-Shed Event',
      groups_id: 5,
      date: 'April 27, 2016',
      time: '9:00am',
      location: 'New York Elementary School'
    }),
    knex('events').insert({
      event_name: 'Cottin\'s Spring Flower Sale',
      groups_id: 5,
      date: 'April 28, 2016',
      time: '1:00pm',
      location: 'Cottin\'s Hardware Store'
    }),
    knex('events').insert({
      event_name: 'Robotics Extravaganza!',
      groups_id: 6,
      date: 'April 29, 2016',
      time: '2:00pm',
      location: 'New York Elementary School'
    }),
    knex('events').insert({
      event_name: 'Fun with Robotics',
      groups_id: 6,
      date: 'April 30, 2016',
      time: '9:00am',
      location: 'Lawrence High School'
    }),
    knex('events').insert({
      event_name: 'Spring Clean-Out-the-Chicken-Coops Event',
      groups_id: 8,
      date: 'May 1, 2016',
      time: '9:00am',
      location: 'Raintree Montessori School'
    }),
    knex('events').insert({
      event_name: 'Cake Bake Sale',
      groups_id: 8,
      date: 'May 2, 2016',
      time: '2:00pm',
      location: 'Raintree Montessori School'
    }),
    knex('events').insert({
      event_name: 'Lawrence High School Chess Tournament',
      groups_id: 7,
      date: 'April 21, 2016',
      time: '9:00am',
      location: 'Lawrence High School'
    }),
    knex('events').insert({
      event_name: 'State Chess Tournament',
      groups_id: 7,
      date: 'April 22, 2016',
      time: '9:00am',
      location: 'KU Union'
    }),
    knex('events').insert({
      event_name: 'Lawrence Swim Team Meet',
      groups_id: 9,
      date: 'May 3, 2016',
      time: '9:00am',
      location: 'Free State High School'
    }),
    knex('events').insert({
      event_name: 'Kansas City Blazers Stroke Clinic',
      groups_id: 9,
      date: 'May 4, 2016',
      time: '4:00pm',
      location: 'Roeland Park Aquatic Center'
    }),
    knex('events').insert({
      event_name: 'Practice',
      groups_id: 10,
      date: 'May 5, 2016',
      time: '5:00pm',
      location: 'Clinton Lake Youth Sports Complex'
    }),
    knex('events').insert({
      event_name: '7919 SPORTING BV Chile 06-07 vs. U9 Boys SKV Brasil',
      groups_id: 10,
      date: 'May 6, 2016',
      time: '2:15pm',
      location: 'Heritage Soccer Park'
    }),
    knex('events').insert({
      event_name: 'Practice',
      groups_id: 11,
      date: 'May 7, 2016',
      time: '5:30pm',
      location: 'Clinton Lake Youth Sports Complex'
    }),
    knex('events').insert({
      event_name: 'U13 Boys SKV Kings - Frydman vs. Opponent',
      groups_id: 11,
      date: 'May 8, 2016',
      time: '12:45pm',
      location: 'Heritage Soccer Park'
    }),
    knex('events').insert({
      event_name: 'Practice',
      groups_id: 12,
      date: 'May 9, 2016',
      time: '5:30pm',
      location: 'Clinton Lake Youth Sports Complex'
    }),
    knex('events').insert({
      event_name: 'Practice',
      groups_id: 12,
      date: 'May 9, 2016',
      time: '5:30pm',
      location: 'Clinton Lake Youth Sports Complex'
    }),
    knex('events').insert({
      event_name: 'Mother\'s Day Weekend Campout',
      groups_id: 13,
      date: 'May 7, 2016',
      time: '9:00am',
      location: 'Clinton State Park'
    }),
    knex('events').insert({
      event_name: 'Pack Meeting',
      groups_id: 13,
      date: 'May 9, 2016',
      time: '7:00pm',
      location: 'First United Methodist Church'
    }),
    knex('events').insert({
      event_name: 'Mother\'s Day Weekend Campout',
      groups_id: 14,
      date: 'May 7, 2016',
      time: '9:00am',
      location: 'Clinton State Park'
    }),
    knex('events').insert({
      event_name: 'Pack Meeting',
      groups_id: 14,
      date: 'May 10, 2016',
      time: '7:00pm',
      location: 'First United Methodist Church'
    }),
    knex('events').insert({
      event_name: 'Mother\'s Day Weekend Campout',
      groups_id: 15,
      date: 'May 7, 2016',
      time: '9:00am',
      location: 'Clinton State Park'
    }),
    knex('events').insert({
      event_name: 'Pack Meeting',
      groups_id: 15,
      date: 'May 11, 2016',
      time: '7:00pm',
      location: 'First United Methodist Church'
    }),
    knex('events').insert({
      event_name: 'Class 1',
      groups_id: 16,
      date: 'April 18, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 2',
      groups_id: 16,
      date: 'April 25, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 3',
      groups_id: 16,
      date: 'May 2, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 4',
      groups_id: 16,
      date: 'May 9, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 5',
      groups_id: 16,
      date: 'May 16, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 6',
      groups_id: 16,
      date: 'May 23, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 1',
      groups_id: 17,
      date: 'April 18, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 2',
      groups_id: 17,
      date: 'April 25, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 3',
      groups_id: 17,
      date: 'May 2, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 4',
      groups_id: 17,
      date: 'May 9, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 5',
      groups_id: 17,
      date: 'May 16, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 6',
      groups_id: 17,
      date: 'May 23, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 1',
      groups_id: 18,
      date: 'April 18, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 2',
      groups_id: 18,
      date: 'April 25, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 3',
      groups_id: 18,
      date: 'May 2, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 4',
      groups_id: 18,
      date: 'May 9, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 5',
      groups_id: 18,
      date: 'May 16, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    }),
    knex('events').insert({
      event_name: 'Class 6',
      groups_id: 18,
      date: 'May 23, 2016',
      time: '5:00pm',
      location: 'Lawrence Arts Center'
    })
  );
};
