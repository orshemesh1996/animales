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
/**
* @swagger
* components:
*   schemas:
*     Animals:
*       type: object
*       required:
*         - message
*         - sender
*       properties:
*         id:
*           type: id
*           description: The id of animal
*         name:
*           type: string
*           description: The name of animal
*         age:
*           type: int
*           description: The id of take animal
*         animalStatus:
*           type: string
*           description: The animal status
*         userId:
*           type: id
*           description: the owner of animal
*         userEffortId:
*           type: id
*           description: the effort id of animal
*       example:
*         id: '1234'
*         name: 'yossi'
*         age: '15'
*         animalStatus: '4566'
*         userId: 'fffff'
*         userEffortId: 'ff'
*/

/**
* @swagger
* /animals:
*   get:
*     summary: get all Animals
*     tags: [Animals]
*     responses:
*       200:
*         description: The get list of Animals
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.get('/',getAllAnimals);
/**
* @swagger
* /animalId:
*   get:
*     summary: get one Animal
*     tags: [Animals]
*     responses:
*       200:
*         description: The get one Animals
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.get('/:animalId',getAnimal);
/**
* @swagger
* /animals:
*   post:
*     summary: add a new Animal
*     tags: [Animals]
*     responses:
*       200:
*         description: add a new Animal
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.post('/',checkAuth,upload.single('image'),createAnimal);
/**
* @swagger
* /animalId:
*   patch:
*     summary: update Animal
*     tags: [Animals]
*     responses:
*       200:
*         description: update Animal
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.patch('/:animalId',checkAuth,updateAnimal);
/**
* @swagger
* /animalId:
*   delete:
*     summary: delete Animal
*     tags: [Animals]
*     responses:
*       200:
*         description: delete Animal
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.delete('/:animalId',checkAuth, deleteAnimal);
module.exports = router;