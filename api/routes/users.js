const express = require('express');
const router = express.Router();
const {
    getAllUser,
    signup,
    updateUser,
    deleteUser,
    getUser
}=require('../controllers/users');

router.get('/',getAllUser);
router.post('/',signup);
router.get('/:userId',getUser);
router.patch('/:userId',updateUser);
router.delete('/:userId', deleteUser);
module.exports = router;