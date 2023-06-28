const express = require('express');
const app = express();
const mongoose =require('mongoose');
const animalesRoutes=require('./api/routes/animals');
const usersRoutes=require('./api/routes/users');
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
mongoose.connect('mongodb://127.0.0.1:27017/animalAdoption',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully!'))
    .catch(() => console.log('Unable to connect to database'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

//routes
app.use('/animals',animalesRoutes);
app.use('/users',usersRoutes);
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;