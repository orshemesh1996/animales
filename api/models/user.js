const mongoose = require('mongoose');
const userType = require('../enums/userType');


const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    userType: { type: String, enum: userType, required: true },
    password: { type: String, required: true},
    animalId: { type: mongoose.Schema.Types.ObjectId, ref: "Animal" , required: true},
    //  request: { type: mongoose.Schema.Types.ObjectId, ref: "request" , required: true},
});

module.exports = mongoose.model('User', userSchema);