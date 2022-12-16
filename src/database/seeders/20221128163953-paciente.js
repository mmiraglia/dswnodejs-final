'use strict';
const models = require('../models/index')
const bcrypt = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      models.usuario.findOrCreate({
          where: {
              id: "1"
          },
          defaults: {
              email: "emailJuan@email.com",
              password: bcrypt.hashSync('password1', 10)
          }
      }),
      models.usuario.findOrCreate({
        where: {
            id: "2"
        },
        defaults: {
            email: "emailPedro@email.com",
            password: bcrypt.hashSync('password2', 10)
        }
      }),
      models.paciente.findOrCreate({
          where: {
              id: "1"
          },
          defaults: {
              nombre: "Juan",
              apellido: "Gonzalez",
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
              fecha_nacimiento: "1981-10-10"
          }
      })
    ])
  }
};
