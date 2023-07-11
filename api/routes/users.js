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

router.get('/',getAllUser);
router.post('/signup',signup);
router.post('/login', login);
router.get('/:userId',getUser);
router.patch('/:userId',checkAuth,updateUser);
router.delete('/:userId',checkAuth, deleteUser);
module.exports = router;