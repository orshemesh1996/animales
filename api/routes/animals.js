const express = require('express');
const router = express.Router();
const upload = require('../Middlewares/upload');
const checkAuth=require('../Middlewares/checkAuth');
const {
    getAllAnimals,
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimal
}=require('../controllers/animals');

/**
* @swagger
* tags: 
*   name: Animals 
*   description: the Animals api 
*/


router.get('/',getAllAnimals);
router.get('/:animalId',getAnimal);

router.post('/',checkAuth,upload.single('image'),createAnimal);
router.patch('/:animalId',checkAuth,updateAnimal);
router.delete('/:animalId',checkAuth, deleteAnimal);
module.exports = router;