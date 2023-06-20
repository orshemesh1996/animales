const Animal =require('../models/animal');
const mongoose= require('mongoose');
module.exports={
    getAllAnimals:  (req,res) => {
        Animal.find().then((animals) =>{
            res.status(200).json({
                animals
            })

        }).catch(error => {
            res.status(500).json({
                error
            }) 

        });
        
    },
    createAnimal : (req,res) => {
        const {name,age,animalStatus,animalType} =req.body;
        const animal= new Animal( {
            _id:new mongoose.Types.ObjectId(),
            name,
            age,
            animalStatus,
            animalType,
        })

        animal.save().then(() =>{

            res.status(200).json({
                message:'Create a new animal'
            }) 

        }).catch(error => {
            res.status(500).json({
                error
            }) 

        });
       
    } , 
    updateAnimal :(req,res) => {
        const animalId= req.params.animalId;
        res.status(200).json({
            message:`update animal ${animalId}`
        })
    },
    deleteAnimal: (req, res) => {
        const AnimalId = req.params.AnimalId
    
        res.status(200).json({
            message: `Delete Animal - ${AnimalId}`
        })
    }
}