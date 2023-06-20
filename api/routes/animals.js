const express = require('express');
const router = express.Router();
const {
    getAllAnimals,
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimal
}=require('../controllers/animals');

router.get('/',getAllAnimals);
router.post('/',createAnimal);
router.get('/:animalId',getAnimal);
router.patch('/:animalId',updateAnimal);
router.delete('/:animalId', deleteAnimal);
module.exports = router;