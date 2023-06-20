const express = require('express');
const router = express.Router();
const {
    getAllAnimals,
    createAnimal,
    updateAnimal,
    deleteAnimal
}=require('../controllers/animals');

router.get('/',getAllAnimals)

router.post('/',createAnimal)
router.patch('/:animalId',updateAnimal)
router.delete('/:animalId', deleteAnimal);
module.exports = router;