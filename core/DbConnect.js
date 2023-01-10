import mongoose, { connect } from 'mongoose'
import Dotenv from 'dotenv';
Dotenv.config();

const connection=()=> mongoose.connect(process.env.DB,(err,db)=>{
     if(!err){
        console.log("successfullly Connected");
     }
     else{
        console.log("Error-->",err);
     }
})
console.log("hfjfffjfj")

export default connection();
