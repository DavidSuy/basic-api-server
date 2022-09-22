const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory';
const carSchema = require('./car');
const animalSchema = require('./animal');

let herokuOptions = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

let sequelize = new Sequelize(
  DATABASE_URL,
  process.env === 'production' ? herokuOptions : {}
);

let CarModel = carSchema(sequelize, DataTypes);
let AnimalModel = animalSchema(sequelize, DataTypes);

module.exports = {
  Car: CarModel,
  Animal: AnimalModel,
  db: sequelize,
};
