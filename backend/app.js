const express = require("express");
require("dotenv").config()
const dbconnect = require("./config/db.config");
const {router} = require("./routes/userRoutes");
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express();

app.use(cors({
    origin: 'http://localhost:5501',
    credentials:true
}))

app.use(cookieParser());
app.use(express.json());
app.use("/",router);


const PORT = process.env.PORT || 3000;
app.listen(PORT,async ()=>{
    dbconnect();
    console.log(`Server is running at http://localhost:${PORT}`);
})
