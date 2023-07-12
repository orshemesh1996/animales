const Request =require('../models/Request');
const mongoose= require('mongoose');
const User=require('../models/user');
module.exports={
    getAllRequest:  (req,res) => {
        Request.find().populate('userId').then((requests) =>{
            res.status(200).json({
                requests
            })

        }).catch(error => {
            res.status(500).json({
                error
            }) 

        });
        
    },
    getRequest : (req,res) =>{
        const requestId= req.params.requestId;
        Request.findById(requestId).populate('userId').then((request) =>{
            res.status(200).json({request }) 
        }).catch(error => {
            res.status(500).json({
                error
            }) 

        });

    },
    createRequest : (req,res) => {
        const {animalId,userId,contant} =req.body;
        const request= new Request( {
            _id:new mongoose.Types.ObjectId(),
            animalId,
            userId,
            contant
        })
        request.save().then(() =>{

            res.status(200).json({
                message:'Create a new Request'
            }) 

        }).catch(error => {
            res.status(500).json({
                error
            }) 

        });
    
    } , 
    updateRequest: (req, res) => {
        const requestId= req.params.requestId;
        Request.updateOne({_id: requestId}, req.body).then(() => {
            res.status(200).json({
                message: 'request Updated'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    deleteRequest: (req, res) => {
        const requestId= req.params.requestId;

        Request.deleteOne({_id: requestId}).then(() => {
            res.status(200).json({
                message: `requestId:${requestId} Deleted`
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    }
}