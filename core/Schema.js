import mongoose, { mongo } from 'mongoose';

const schema =new mongoose.Schema({
    name:{type:String},
    father:{type:String},
    mother:{type:String},
    mobile:{type:Number},
    gmail:{type:String}

})

export default mongoose.model("user",schema)