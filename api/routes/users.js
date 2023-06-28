const express = require('express');
const router = express.Router();
const {
    getAllUser,
    createUser,
    updateUser,
    deleteUser,
    getUser
}=require('../controllers/users');

router.get('/',getAllUser);
router.post('/',createUser);
router.get('/:userId',getUser);
router.patch('/:userId',updateUser);
router.delete('/:userId', deleteUser);
module.exports = router;