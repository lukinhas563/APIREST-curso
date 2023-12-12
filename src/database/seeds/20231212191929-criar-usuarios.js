'use strict';
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {

    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Luiz 1',
          email: 'luiz1@email.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luiz 2',
          email: 'luiz2@email.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luiz 3',
          email: 'luiz3@email.com',
          password_hash: await bcryptjs.hash('147258', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});

  },

  async down(queryInterface, Sequelize) { }
};
