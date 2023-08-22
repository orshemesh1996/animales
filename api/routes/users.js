const express = require('express');
const router = express.Router();
const checkAuth=require('../Middlewares/checkAuth');
const {
    getAllUser,
    signup,
    updateUser,
    deleteUser,
    login,
    getUser
}=require('../controllers/users');

/**
* @swagger
* components:
*   schemas:
*     User:
*       type: object
*       required:
*         - message
*         - sender
*       properties:
*         name:
*           type: string
*           description: The name of user
*         email:
*           type: string
*           description: The email of user
*         userType:
*           type: string
*           description: The type of user
*         password:
*           type: string
*           description: The name of user
*         animalId:
*           type: id
*           description: The id of amimal  
*       example:
*         name: 'this is swagger test message'
*         email: '123456@gmail.com'
*         userType: 'EFFORT'
*         password: '4566'
*         animalId: 'fffff'
*/



/**
* @swagger
* /user:
*   get:
*     summary: get all user
*     tags: [User Api]
*     responses:
*       200:
*         description: The user list
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.get('/',getAllUser);
/**
* @swagger
* /user:
*   post:
*     summary: create user
*     tags: [User Api]
*     responses:
*       200:
*         description: The user list
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.post('/signup',signup);
/**
* @swagger
* /userId:
*   post:
*     summary: login user 
*     tags: [User Api]
*     responses:
*       200:
*         description: The login of user
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.post('/login', login);
/**
* @swagger
* /userid:
*   get:
*     summary: get user
*     tags: [User Api]
*     responses:
*       200:
*         description: get only one user 
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.get('/:userId',getUser);
/**
* @swagger
* /userid:
*   patch:
*     summary: update user
*     tags: [User Api]
*     responses:
*       200:
*         description: update only one user 
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.patch('/:userId',checkAuth,updateUser);
/**
* @swagger
* /userid:
*   delete:
*     summary: delete user
*     tags: [User Api]
*     responses:
*       200:
*         description: delete only one user 
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.delete('/:userId',checkAuth, deleteUser);
module.exports = router;