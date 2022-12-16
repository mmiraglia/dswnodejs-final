'use strict';
const models = require('../models/index')

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      models.turno.findOrCreate({
          where: {
              id: "1"
          },
          defaults: {
              fecha: new Date(),
              observaciones: "Dolor de rodilla",
              medicoId: 3,
              pacienteId: 1,
              tratamientoId: 1
          }
      }),
      models.turno.findOrCreate({
          where: {
              id: "2"
          },
          defaults: {
              fecha: new Date(),
              medicoId: 3,
              pacienteId: 2
          }
      }),
      models.turno.findOrCreate({
          where: {
              id: "3"
          },
          defaults: {
              fecha: new Date(),
              medicoId: 4,
              pacienteId: 1
          }
      }),
      models.turno.findOrCreate({
          where: {
              id: "4"
          },
          defaults: {
              fecha: new Date(),
              medicoId: 4,
              pacienteId: 2
          }
      })
    ])
  }
};