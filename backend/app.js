const express = require('express');


const app = express();
const cookieParser=require("cookie-parser");
const dbconnect = require('./config/db.config.js');

dbconnect();




app.use('/',(req,res)=>{
    res.status(200).json({data:'Server is working'});
});
module.exports = app;