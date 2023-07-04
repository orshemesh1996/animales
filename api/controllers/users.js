const User =require('../models/user');
const mongoose= require('mongoose');
module.exports={
    getAllUser:  (req,res) => {
        User.find().populate('animalId').then((users) =>{
            res.status(200).json({
                users 
            })

        }).catch(error => {
            res.status(500).json({
                error
            }) 

        });
        
    },
    getUser : (req,res) =>{
        const userId= req.params.userId;
        User.findById(userId).populate('animalId').then((user) =>{
            res.status(200).json({user }) 
        }).catch(error => {
            res.status(500).json({
                error
            }) 

        });

    },
    createUser : (req,res) => {
        const {name,userType,password,animalId} =req.body;
        if(!User.findById(animalId))
        {

        const user= new User( {
            _id:new mongoose.Types.ObjectId(),
            name,
            userType,
            password,
            animalId
        })

        user.save().then(() =>{

            res.status(200).json({
                message:'Create a new user'
            }) 

        }).catch(error => {
            res.status(500).json({
                error
            }) 

        });
    }else{
        res.status(200).json({
            message:'animal is Exists'
        }) 
    }
    } , 
    updateUser: (req, res) => {
        const userId= req.params.userId;

        User.updateOne({_id: userId}, req.body).then(() => {
            res.status(200).json({
                message: 'user Updated'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    deleteUser: (req, res) => {
        const userId = req.params.userId;

        User.deleteOne({_id: userId}).then(() => {
            res.status(200).json({
                message: `user _id:${userId} Deleted`
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    }
}