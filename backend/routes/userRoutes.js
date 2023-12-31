const {Router} = require("express");

const {signUp,logIn, getUserDetails}= require( "../controller/userController.js");
const{signupValidator} = require("../middleware/signup.validator.js")
const{loginValidator} = require("../middleware/login.validator.js")
const router = Router();

router.post("/signup",signupValidator,signUp);
router.post("/login",loginValidator,logIn);
router.get("/",getUserDetails)



module.exports ={
    router
}