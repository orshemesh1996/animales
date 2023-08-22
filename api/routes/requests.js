const express = require('express');
const router = express.Router();
//const checkAuth=require('../Middlewares/checkAuth');
const {
    getAllRequest,
    getRequest,
    createRequest,
    deleteRequest,
    updateRequest
}=require('../controllers/Requests');

/**
* @swagger
* tags: 
*   name: Requests 
*   description: the Requests api 
*/
/**
* @swagger
* components:
*   schemas:
*     Requests:
*       type: object
*       required:
*         - message
*         - sender
*       properties:
*         id:
*           type: id
*           description: The id of Request
*         animalId:
*           type: id
*           description: The email of animal
*         userId:
*           type: id
*           description: The id of take user
*         contant:
*           type: string
*           description: The contant
*       example:
*         name: 'this is swagger test message'
*         email: '123456@gmail.com'
*         userType: 'EFFORT'
*         password: '4566'
*         animalId: 'fffff'
*/

/**
* @swagger
* /requests:
*   get:
*     summary: get all requests
*     tags: [Requests]
*     responses:
*       200:
*         description: The get list of requests
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.get('/',getAllRequest);
/**
* @swagger
* /requestId:
*   get:
*     summary: get request
*     tags: [Requests]
*     responses:
*       200:
*         description: The get request
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.get('/:requestId',getRequest);
/**
* @swagger
* /request:
*   post:
*     summary: create request
*     tags: [Requests]
*     responses:
*       200:
*         description: The create request
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.post('/',createRequest);
/**
* @swagger
* /requestId:
*   patch:
*     summary: update request
*     tags: [Requests]
*     responses:
*       200:
*         description: The update request
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.patch('/:requestId',updateRequest);
/**
* @swagger
* /requestId:
*   delete:
*     summary: delete request
*     tags: [Requests]
*     responses:
*       200:
*         description: The delete request
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.delete('/:requestId', deleteRequest);
module.exports = router;