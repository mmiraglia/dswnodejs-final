const globalConstants = require("../../const/globalConstants");

module.exports = {
  "development": {
    "username": globalConstants.DB_USER,
    "password": globalConstants.DB_PASS,
    "database": globalConstants.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "login": false,
    dialectOptions: {
      useUTC: false, // for reading from database
    },
    timezone: '-03:00', // for writing to database
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
