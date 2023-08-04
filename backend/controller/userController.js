const {User} = require( "../model/userSchema.js");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose")
const JWT = require("jsonwebtoken")

const signUp = async (req,res)=>{
    const {fullname,email,password}=req.body;
    if(!fullname || !email || !password)
    {
        return next(new AppError('All fields are required',400));
    }

    const userExists = await User.findone({email});
    if(userExists){
        return next(new AppError('Email already exists',400));
    }
    const user = await User.create({
        fullname,
        email,
        password,
      
    });
    if(!user){
        return next (new AppError('User registration failed,please try again'));
    }
    // TODO FILE upload
 
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
    try {
        const{email,password} = req.body;
    if(!email || !password)
    {
        return next(new AppError('All fields are required',400));
    }
    const user = await User.findOne({
        email
    }).select('+password');
    if(!user || !user.comparePassword(password))
    {
        return next(new AppError('Email or password does not exist',400));
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
        return next(new AppError(e.message,500));
    }

};
module.exports= {
    signUp,
    logIn,
   
}