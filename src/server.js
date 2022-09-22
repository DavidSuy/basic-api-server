'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const carsRouter = require('./routes/car');
const animalRouter = require('./routes/animals');

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.get('/', (req, res) => res.status(200).send('hello'));
app.use('/cars', carsRouter);
app.use('/animal', animalRouter);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  },
  app,
};
