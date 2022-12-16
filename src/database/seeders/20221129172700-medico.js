'use strict';
const models = require('../models/index')
const bcrypt = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      models.usuario.findOrCreate({
        where: {
            id: "3"
        },
        defaults: {
          email: "emailCosme@email.com",
          password: bcrypt.hashSync('password1', 10)
        }
      }),
      models.usuario.findOrCreate({
        where: {
            id: "4"
        },
        defaults: {
          email: "emailHomero@email.com",
          password: bcrypt.hashSync('password2', 10)
        }
      }),
      models.medico.findOrCreate({
          where: {
              id: "3"
          },
          defaults: {
              nombre: "Cosme",
              apellido: "Fulanito",
              especialidad: "Traumatologo"
          }
      }),
      models.medico.findOrCreate({
          where: {
              id: "4"
          },
          defaults: {
              nombre: "Homero",
              apellido: "Simpson",
              especialidad: "Cirujano"
          }
      })
    ])
  }
};