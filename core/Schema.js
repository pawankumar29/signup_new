import mongoose, { mongo } from 'mongoose';

const schema =new mongoose.Schema({
    name:{type:String,required:[true,"please enter the name "]},
    father:{type:String,required:[true,"please enter the father name"]},
    mother:{type:String,required:[true,"please enter the mother name "]},
    mobile:{type:Number,required:[true,"please enter the mobile number "]},
    gmail:{type:String,required:[true,"please enter the gmail "]}

})

export default mongoose.model("user",schema)