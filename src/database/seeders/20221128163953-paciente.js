'use strict';
const models = require('../models/index')

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      models.paciente.findOrCreate({
          where: {
              id: "1"
          },
          defaults: {
              nombre: "Juan",
              apellido: "Gonzalez",
              email: "emailJuan@email.com",
              fecha_nacimiento: "1979-01-01"
          }
      }),
      models.paciente.findOrCreate({
          where: {
              id: "2"
          },
          defaults: {
              nombre: "Pedro",
              apellido: "Gomez",
              email: "emailPedro@email.com",
              fecha_nacimiento: "1981-10-10"
          }
      })
    ])
  }
};
