import express from 'express';

import cookieParser from "cookie-parser";

const app = express();
import dbconnect from './config/db.config.js';

dbconnect();




app.use('/',(req,res)=>{
    res.status(200).json({data:'Server is working'});
});
export default app;