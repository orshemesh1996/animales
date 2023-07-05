const User =require('../models/user');
const mongoose= require('mongoose');
const bcrypt =require('bcrypt');
const jwt= require('jsonwebtoken');
require('dotenv').config();
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
    login : (req , res) =>{
        console.log(process.env.TOKEN_SECRET);
        const {email,password}=req.body;
        User.find({email}).then((users) =>{
            if(users.length===0){
               return res.status(401).json({
                    message:'Auth failed'
                });
            }
            const[user]=users;
           bcrypt.compare(password,user.password,(error,result)=>
           {
            if (error){
            return res.status(401).json({
                message:'Auth failed'
            });
            }
            if(result){
                const token=jwt.sign(
                    {
                        id : user._id,
                        email : user.email

                    }
               , process.env.TOKEN_SECRET,
               {
                expiresIn:"1H"
               });
               return res.status(200).json({
                    message:'Auth successful',
                    token
                })
            }
            return res.status(401).json({
                message:'Auth failed'
            });

           });

        })
    },
    signup : (req,res) => {
        const {name,email,userType,password,animalId} =req.body;
        User.find({ email }).then((users) => {
            if (users.length >= 1)
             {
                return res.status(409).json({
                    message: 'Email exists'
                });
            }
            bcrypt.hash(password,10,(error,hash) =>{
                if(error){
                   return res.status(500).json({
                        error
                    })
                }
                const user= new User( {
                    _id:new mongoose.Types.ObjectId(),
                    name,
                    email,
                    userType,
                    password : hash,
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
            })
        });   
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