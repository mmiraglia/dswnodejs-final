'use strict';
const models = require('../models/index')

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      models.medico.findOrCreate({
          where: {
              id: "1"
          },
          defaults: {
              nombre: "Cosme",
              apellido: "Fulanito",
              especialidad: "Traumatologo"
          }
      }),
      models.medico.findOrCreate({
          where: {
              id: "2"
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