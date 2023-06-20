const mongoose = require('mongoose');
const animalStatus = require('../enums/animalStatus');
const animalType = require('../enums/animalType');

const animalSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    age: { type: Number, required: true },
    animalStatus: { type: String, enum: animalStatus, required: true },
  //  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" , required: true},
  //  images: { type: String, required: false , default: ''}
    animalType: { type: String, enum: animalType, required: true }
});

module.exports = mongoose.model('Animal', animalSchema);