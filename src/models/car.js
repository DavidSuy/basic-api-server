'use strict';

const carSchema = (sequelize, DataTypes) =>
  sequelize.define('Cars', {
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = carSchema;
