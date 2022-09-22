'use strict';

const { start } = require('./src/server');
const { db } = require('./src/models');
const PORT = process.env.PORT || 3001;

db.sync()
  .then(() => {
    start(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
// start(PORT);
