'use strict';

const animalSchema = (sequelize, DataTypes) =>
  sequelize.define('Cars', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    legs: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  });

module.exports = animalSchema;
