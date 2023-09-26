const {User} = require( "../model/userSchema.js");
// const bcrypt = require("bcryptjs");
// const mongoose = require("mongoose")
const JWT = require("jsonwebtoken")

const cookieOption = {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    secure: true
}
const signUp = async (req,res)=>{
    const {name,email,password,username,bio}=req.body;
    
    const user = await User.create({
        name,
        email,
        password,
        username,
        bio
      
    });
    if(!user){
        res.status(501).send({msg:error.message})
    }

 
    await user.save();
    user.password = undefined;

    const token = await user.generateJWTToken();
    res.cookie('token',token,cookieOption)
    res.status(201).json({
        success:true,
        message:'User registered successfully',
        user
})

};
const logIn =async (req,res)=>{
    const {username,password} = req.body;
    try {
    
    const user = await User.findOne({
        username
    }).select('+password');
    if(!user || !user.comparePassword(password))
    {
        res.status(404).send({msg:"No Account Found Associated with this username"})
    }
    const token = await user.generateJWTToken();
    user.password = undefined;

    res.cookie('token',token,cookieOption);

    res.status(200).json({
        success:true,
        message:'User loggedin successfully',
        user,
    });
    } catch (e) {
        res.status(500).send({msg:e.message})
    }

};
const getUserDetails = async(req,res)=>{
    // const {username} = req.user;
    try {
        console.log("he")
        const {userId} = req.user._id;
        const userData = await User.findOne({userId});
        console.log(userData);
        res.status(200).send({
            msg:"Success",
            data:userData
        })
    } catch (err) {
        res.status(501).send({msg:err.message})
    }
}
module.exports= {
    signUp,
    logIn,
   getUserDetails
}