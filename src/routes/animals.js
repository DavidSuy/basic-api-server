const express = require('express');
const router = express.Router();
const { Animal } = require('../models');

router.get('/', async (req, res) => {
  let animals = await Animal.findAll();
  res.json(animals);
});
router.get('/:id', async (req, res) => {
  let id = req.params.id;
  let animal = await Animal.findAll({
    where: {
      id,
    },
  });
  res.send(animal);
});
router.post('/', async (req, res) => {
  let animalData = req.body;
  let newAnimal = await Animal.create(animalData);
  res.json(newAnimal);
});
router.put('/:id', async (req, res) => {
  let id = req.params.id;
  let newAnimal = req.body;
  let respond = await Animal.update(newAnimal, {
    where: {
      id: id,
    },
  });
  console.log(respond);
  let updatedAnimal = await Animal.findAll({
    where: {
      id,
    },
  });
  res.json(updatedAnimal);
});
router.delete('/:id', async (req, res) => {
  let id = req.params.id;
  let respond = await Animal.destroy({
    where: {
      id,
    },
  });
  console.log(respond);
  res.send(respond === 1 ? null : 'Check id');
});

module.exports = router;
