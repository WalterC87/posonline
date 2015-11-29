'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('factura',
      'firmaElectronica',
      {
        type: Sequelize.STRING,      
        allowNull: false,
        validate: {
          len: [20, 500]
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    migration.dropTable("factura").done(done);
  }
};
