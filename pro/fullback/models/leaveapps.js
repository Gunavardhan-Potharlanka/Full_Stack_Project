import mongoose from "mongoose";
const leave = new mongoose.Schema({
    lt:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    roll:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    }
})

export default mongoose.model('dashhod',leave);