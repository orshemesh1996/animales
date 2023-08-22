const express = require('express');
require('dotenv').config();
//mongodb://127.0.0.1:27017/animalAdoption
//onlz8n9uG57qf1cU
const app = express();
const mongoose = require('mongoose');
const animalesRoutes = require('./api/routes/animals');
const usersRoutes = require('./api/routes/users');
const requestRoutes = require('./api/routes/requests');
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
// if (process.env.NODE_ENV == "development"){
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: " Api animals project",
            version: '1.0.0'
        },
        servers: [
            {
                api: 'http://localhost:3000/'
            },
            {
                api: 'https://node-mongodb-api-5dig.onrender.com/'
            }
        ]
    },
    apis: ['./api/routes/*.js']
}
const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
// }

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
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


app.use('/animals', animalesRoutes);
app.use('/users', usersRoutes);
app.use('/requests', requestRoutes);
app.use('/upload', express.static('uploads'))
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