import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import hodSchema from "./models/hodSchema";
import studSchema from "./models/studSchema";

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://Guna:TOdIbrl31rblPrnU@fsdproject.ikq9nkx.mongodb.net/FSDProject?retryWrites=true&w=majority&appName=AtlasApp')
.then(()=>app.listen(5000)).then(()=>console.log('Connected successfully and listening at port 5000'))
.catch((err)=>console.log(err));

app.use('/hodlogin', (req, res)=>{
    let {uname, pswd} = req.body;
    console.log(uname, pswd);
});

app.use('/hodlogdetails/:id', async(req, res)=>{
    const id = req.params.id;
    let users;
    try{
        users= await hodSchema.find({eid:id});
    }catch(err){
        console.log(err);
    }
    if(!users){
        res.send("");
    }
    else{
        res.send(users);
    }
});

app.post('/addStud', (req,res) => {
    const {adm,dte,fname,lname,mble,dob,dad,mom,mail,branch,roll,passwd,text} = req.body.studdata;
    const St = new studSchema({
        adm,dte,fname,lname,mble,dob,dad,mom,mail,branch,roll,passwd,text
    })
    St.save()
    return res.send({msg:'done',result:St})
});

app.use('/studlogdetails/:id', async(req, res)=>{
    const id = req.params.id;
    let users;
    try{
        users= await studSchema.find({roll:id});
    }catch(err){
        console.log(err);
    }
    if(!users){
        res.send("");
    }
    else{
        res.send(users);
    }
});

app.get('/studs', async(req, res)=>{
    let students;
    try{
        students = await studSchema.find();
    }catch(err){
        console.log(err);
    }
    if(!students) res.send("Couldn't find");
    else res.send(students);
})

app.get('/studbyid/:id', async(req, res)=>{
    let student;
    let id = req.params.id;
    try{
        student = await studSchema.find({roll:id});
        console.log(student);
    }catch(err){
        console.log(err);
    }
    if(!student.length) res.send("Couldn't find");
    else res.send(student);
});

app.delete('/rmstudentbyid/:id', async(req, res)=>{
    let id = req.params.id;
    let student;
    try{
        student = await studSchema.findOneAndDelete({roll:id});
    }catch(err){
        console.log(err);
    }
    console.log(student);
    res.send('Done');
});