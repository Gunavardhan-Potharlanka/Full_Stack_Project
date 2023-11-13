import mongoose from "mongoose";
const prince = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    mble:{
        type:Number,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    pid:{
        type:Number,
        required:true
    },
    edu:{
        type:String,
        required:true
    },
    passwd:{
        type:String,
        required:true
    }
})

export default mongoose.model('principal',prince);