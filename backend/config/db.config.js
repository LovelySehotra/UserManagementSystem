import mongoose from "mongoose";
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/UMS";

const dbconnect =()=>{
    mongoose
    .connect(MONGODB_URL)
    .then((conn)=>console.log(`connected to db :${conn.connection.host}`))
    .catch((err)=>console.log(err.message));
    
};
export default dbconnect;
