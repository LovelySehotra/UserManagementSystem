const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const userSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: [true, 'Name is Required'],
            trim: true
        },
        username: {
            type: String,
            required: [true, 'Username is Required'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'User email is required'],
            unique: true,

        },
        password: {
            type: String,
            select: false,
        },
        bio: {
            type: String,

        }


    }
    
);
// mentod to Generate  token 
userSchema.method={
    jwtToken(){
        return
        JWT.sign({id:this._id,username:this.username},process.env.SECRET,{
                expiresIn:'24d'
        })
    }
}
// to hash password before save 
userSchema.pre("save",async function(next){
    if(!this.isModified('password')) 
    return next();

    this.password = await bcrypt.hash(this.password,12); 
    return next();
})
const User = mongoose.model('user', userSchema);
module.exports = {
    User
}