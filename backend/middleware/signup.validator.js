exports.signupValidator = async (req,res,next) =>{
    const {name,email,password,username}=req.body;
    if(!name || !email || !password|| !username)
    {
        res.status(404).send({msg:"all Input Fields are required"})
    }else{
        next();
    }

   
}