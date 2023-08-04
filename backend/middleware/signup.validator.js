exports.signupValidator = async (req,res,next) =>{
    const {fullname,email,password}=req.body;
    if(!fullname || !email || !password)
    {
        return next(new AppError('All fields are required',400));
    }

    const userExists = await User.findone({email});
    if(userExists){
        return next(new AppError('Email already exists',400));
    }
}