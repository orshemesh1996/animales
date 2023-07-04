const Animal =require('../models/animal');
const mongoose= require('mongoose');
const User=require('../models/user');
module.exports={
    getAllAnimals:  (req,res) => {
        Animal.find().populate('userId').then((animals) =>{
            res.status(200).json({
                animals
            })

        }).catch(error => {
            res.status(500).json({
                error
            }) 

        });
        
    },
    getAnimal : (req,res) =>{
        const animalId= req.params.animalId;
        Animal.findById(animalId).populate('userId').then((animal) =>{
            res.status(200).json({animal }) 
        }).catch(error => {
            res.status(500).json({
                error
            }) 

        });

    },
    createAnimal : (req,res) => {
        const { path : image } =req.file;
        const {name,age,animalStatus,animalType,userId} =req.body;
        const animal= new Animal( {
            _id:new mongoose.Types.ObjectId(),
            name,
            age,
            animalStatus,
            animalType,
            userId,
            image :image.replace('\\','/')
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
    updateAnimal: (req, res) => {
        const animalId= req.params.animalId;
        Animal.updateOne({_id: animalId}, req.body).then(() => {
            res.status(200).json({
                message: 'animal Updated'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    deleteAnimal: (req, res) => {
        const animalId = req.params.animalId

        Animal.deleteOne({_id: animalId}).then(() => {
            res.status(200).json({
                message: `animal _id:${animalId} Deleted`
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    }
}