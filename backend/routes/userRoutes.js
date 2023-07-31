import {Router} from "express";

// const{signUp,signIn,forgetPassword,}=require("../controller/userController.js");
const router = Router();

router.post("/signup",signUp);
router.post("/login",login);




export default router;