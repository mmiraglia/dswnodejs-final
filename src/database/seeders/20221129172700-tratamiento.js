'use strict';
const models = require('../models/index')

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      models.tratamiento.findOrCreate({
          where: {
              id: "1"
          },
          defaults: {
              descripcion: "Yeso hasta antebrazo"
          }
      }),
      models.tratamiento.findOrCreate({
          where: {
              id: "2"
          },
          defaults: {
              descripcion: "Yeso hasta rodilla"
          }
      }),
      models.tratamiento.findOrCreate({
          where: {
              id: "3"
          },
          defaults: {
              descripcion: "Operación a corazón abierto"
          }
      }),
      models.tratamiento.findOrCreate({
          where: {
              id: "4"
          },
          defaults: {
              descripcion: "Amputación de pierna"
          }
      })
    ])
  }
};