const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema(

    {
        name: {
            type: 'String',
            required: [true, 'Name is Required'],
            minLength: [5, 'Name must be atleast 5 character'],
            trim: true,

        },
        username: {
            type: String,
            required: [true, 'Username is Required'],
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: [true, 'User email is required'],
            unique: true,
            match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Please filll in a valid email address']

        },
        password: {
            type: String,
            minLength:[8,'Password must be atleast 8 character'],
            select: false,
        },
        bio: {
            type: String,

        }


    }

);
// mentod to Generate  token 
userSchema.methods = {
   
    generateJWTToken: async function () {
        return await jwt.sign(
            { id: this._id, email: this.email, subscription: this.subscription, role: this.role },
            process.env.JWT_SECRET,
    
            {
                expiresIn: process.env.JWT_EXPIRY,
            }
        )
    },
    comparePassword: async function (plainTextPassword) {
        return await bcrypt.compare(plainTextPassword, this.password);
    },
}

// to hash password before save 
userSchema.pre("save", async function (next) {
    if (!this.isModified('password'))
        return next();

    this.password = await bcrypt.hash(this.password, 12);
    return next();
})
const User = mongoose.model('user', userSchema);
module.exports = {
    User
}