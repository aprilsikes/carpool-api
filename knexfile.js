require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    // connection: 'postgres://localhost/carpool_development'
    connection: process.env.DATABASE_URL + '?ssl=true'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
