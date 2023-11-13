import mongoose from "mongoose";
const Staff = new mongoose.Schema({
    eid:{
        type:String,
        required:true
    },
    dt:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    mble:{
        type:String,
        required:true
    },
    dept:{
        type:String,
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

export default mongoose.model('Staff',Staff);