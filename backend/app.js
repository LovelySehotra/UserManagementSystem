const express = require("express");
require("dotenv").config()
const {router} = require("./routes/userRoutes.js")
const  dbconnect = require('./config/db.config.js');
const cors = require("cors")
const app = express();
const  cookieParser = require("cookie-parser");
app.use(cors({
    origin:"http://localhost:5500",
    credentials:true
}))

dbconnect();


app.use(cookieParser())
app.use(express.json())
app.use("/",router)
module.exports=
    app;