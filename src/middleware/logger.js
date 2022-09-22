'use strict';

const logger = (req, res, next) => {
  const { method, path } = req;
  console.log(`Method: ${method}, Path: ${path}`);
  next();
};

module.exports = logger;
