import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import hodSchema from "./models/hodSchema";
app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb+srv://Guna:TOdIbrl31rblPrnU@fsdproject.ikq9nkx.mongodb.net/FSDProject?retryWrites=true&w=majority&appName=AtlasApp')
.then(()=>app.listen(5000)).then(()=>console.log('Connected successfully and listening at port 5000'))
.catch((err)=>console.log(err));
app.use('/hodlogin', (req, res)=>{
    let {uname, pswd} = req.body;
    console.log(uname, pswd);
})
// app.use('/hoddetails', async(req, res)=>{
//     let users = await hodSchema.find();
//     if(!users){
//         console.log("Can't find");
//         res.send('Failure');
//     }
//     else{
//         console.log(users);
//         res.status(200).json({users});
//     }
// })
app.use('/hodlogdetails/:id', async(req, res)=>{
    const id = req.params.id;
    let users;
    try{
        users= await hodSchema.find({eid:id});
    }catch(err){
        console.log(err);
    }
    if(!users){
        res.send("Can't find");
    }
    else{
        res.status(200).json(users);
    }
})
app.use('/hoddetails/:id', async(req, res)=>{
    const id = req.params.id;
    let users;
    try{
        users= await hodSchema.find({eid:id});
    }catch(err){
        console.log(err);
    }
    if(!users){
        res.send("Can't find");
    }
    else{
        res.status(200).json(users);
    }
})
app.use('/hodpro/:id', async(req, res)=>{
    const id = req.params.id;
    let users;
    try{
        users = await hodSchema.find({eid:id})
    }catch(err){
        console.log(err);
    }
    if(!users){
        res.send("Can't find");
    }
    else{
        res.status(200).json(users);
    }
})