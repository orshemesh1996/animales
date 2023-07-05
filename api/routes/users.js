const express = require('express');
const router = express.Router();
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
router.patch('/:userId',updateUser);
router.delete('/:userId', deleteUser);
module.exports = router;