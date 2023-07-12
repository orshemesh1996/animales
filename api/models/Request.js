const mongoose = require('mongoose');


const RequestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    animalId: { type: mongoose.Schema.Types.ObjectId, ref: "Anmial" , required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" , required: true},
    contant: { type: String, required: true },

});

module.exports = mongoose.model('Request', RequestSchema);