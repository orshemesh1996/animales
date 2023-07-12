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


router.get('/',getAllRequest);
router.get('/:requestId',getRequest);

router.post('/',createRequest);
router.patch('/:requestId',updateRequest);
router.delete('/:requestId', deleteRequest);
module.exports = router;