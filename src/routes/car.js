const express = require('express');
const router = express.Router();
const { Car } = require('../models');

router.get('/', async (req, res) => {
  console.log(Car);
  let cars = await Car.findAll();
  res.json(cars);
  // res.send('cars');
});
router.get('/:id', async (req, res) => {
  let id = req.params.id;
  let car = await Car.findAll({
    where: {
      id,
    },
  });
  res.send(car);
});
router.post('/', async (req, res) => {
  let carData = req.body;
  let newCar = await Car.create(carData);
  res.json(newCar);
});
router.put('/:id', async (req, res) => {
  let id = req.params.id;
  let newCar = req.body;
  let respond = await Car.update(newCar, {
    where: {
      id: id,
    },
  });
  console.log(respond);
  let updatedCar = await Car.findAll({
    where: {
      id,
    },
  });
  res.json(updatedCar);
});
router.delete('/:id', async (req, res) => {
  let id = req.params.id;
  let respond = await Car.destroy({
    where: {
      id,
    },
  });
  console.log(respond);
  res.send(respond === 1 ? null : 'Check id');
});

module.exports = router;
