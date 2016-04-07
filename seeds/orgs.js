exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('orgs').del(),

    knex('orgs').insert({
      org_name: 'Liberty Memorial Central Middle School',
      org_url: 'http://www.usd497.org/Domain/22',
      image_url: 'https://soe.ku.edu/sites/soe.ku.edu/files/pds/schools/central.JPG',
      email: 'lmcms@lmcms.com',
      password: 'lmcms',
      category: 'School',
      street1: '1400 Massachusetts St',
      street2: '',
      city: 'Lawrence',
      state: 'KS',
      zip: 66044
    }),
    knex('orgs').insert({
      org_name: 'New York Elementary School',
      org_url: 'http://www.usd497.org/',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/US-KS-Lawrence--2008-01-12-T-04-42-P-um-al.jpg',
      email: 'nye@nye.com',
      password: 'nye',
      category: 'School',
      street1: '936 New York St',
      street2: '',
      city: 'Lawrence',
      state: 'KS',
      zip: 66044
    }),
    knex('orgs').insert({
      org_name: 'Raintree Montessori School',
      org_url: 'http://raintreemontessori.org/current/',
      image_url: 'http://www.bgcons.com/sites/default/files/styles/latest_projects/public/raintree_1001.jpg',
      email: 'raintree@raintree.com',
      password: 'raintree',
      category: 'School',
      street1: '4601 Clinton Pkwy',
      street2: '',
      city: 'Lawrence',
      state: 'KS',
      zip: 66047
    }),
    knex('orgs').insert({
      org_name: 'Sporting Kaw Valley',
      org_url: 'http://www.kawvalleysoccer.com/home.php',
      image_url: 'http://worldonline.media.clients.ellingtoncms.com/img/marketplace/businesses/images/2013/06/20/main_r470x260.jpg?86d48494c237f01f07dbf0fb9f3a08e2ebe567b4',
      email: 'skv@skv.com',
      password: 'skv',
      category: 'Sports',
      street1: '2518 Ridge Ct',
      street2: '#216',
      city: 'Lawrence',
      state: 'KS',
      zip: 66046
    }),
    knex('orgs').insert({
      org_name: 'Scouts',
      org_url: '',
      image_url: 'http://www.roselands.org.uk/sitebuildercontent/sitebuilderpictures/scoutsmascot.gif',
      email: 'scouts@scouts.com',
      password: 'scouts',
      category: 'Scouts',
      street1: '123 Scout Lane',
      street2: '',
      city: 'Lawrence',
      state: 'KS',
      zip: 66044
    }),
    knex('orgs').insert({
      org_name: 'Lawrence Arts Center',
      org_url: 'https://lawrenceartscenter.org/',
      image_url: 'http://www.jodybrownarchitecture.com/wp-content/uploads/2012/06/lac-1.jpg',
      email: 'lac@lac.com',
      password: 'lac',
      category: 'Arts',
      street1: '940 New Hampshire St',
      street2: '',
      city: 'Lawrence',
      state: 'KS',
      zip: 66044
    })
  );
};
