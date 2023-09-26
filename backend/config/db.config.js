const  mongoose = require("mongoose");
require("dotenv").config()

const dbconnect =async ()=>{
    try {
        const {connection} = await mongoose.connect(
            process.env.MONG_URL || "mongodb://127.0.0.1:27017/ums"
        ) 
        if (connection) {
            console.log(`DB is connect at ${connection.host}`)
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports= dbconnect;
