const jwt = require('jsonwebtoken');
require('dotenv').config();

const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET);
        next();
    } catch(error) {
        res.status(401).json({
            message: 'Auth failed'
        })
    }
}

module.exports = checkAuth;