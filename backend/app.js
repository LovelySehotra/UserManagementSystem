const express = require("express");
require("dotenv").config()
const dbconnect = require("./config/db.config")
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT,async ()=>{
    dbconnect();
    console.log(`Server is running at http://localhost:${PORT}`);
})
