const express = require('express');
const userRouter = express.Router();
const User = require('../model/User');



userRouter.get('/',(req,res)=>{
    User.find({},(err,response)=>{
        if(err){
            res.status(500).json({message : {
                msgBody : "Unable to get User",
                msgError : true
            }});
        } else {
            res.status(200).json(response);
        }
    });
});

//create
userRouter.post('/',(req,res)=>{
    const user = new User(req.body);
    console.log(req.body);
    user.save((err,document)=>{
        if(err){
            console.log(err);
            res.status(500).json({message : {
                msgBody : "Unable to add User",
                msgError : true
            }});
        }
        else
            res.status(200).json({message :{
                msgBody : "Successfully Added User",
                msgError : false
            }});
    });
});


//delete
//user
userRouter.delete('/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id,err=>{
        if(err)
            res.status(500).json({message : {
                msgBody : "Unable to delete User",
                msgError : true
            }});
        else
            res.status(200).json({message :{
                msgBody : "Successfully Deleted User",
                msgError : false
            }});
    });
});

//update
userRouter.put('/:id',(req,res)=>{
    User.findByIdAndUpdate(req.params.id,req.body,{runValidators : true},(err,response)=>{
        if(err){
            res.status(500).json({message : {
                msgBody : "Unable to Update User",
                msgError : true
            }});
        }
        else
            res.status(200).json({message :{
                msgBody : "Successfully Updated User",
                msgError : false
            }});
    });
});

module.exports = userRouter;