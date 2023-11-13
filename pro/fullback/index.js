import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import hodSchema from "./models/hodSchema";
import studSchema from "./models/studSchema";
import leaveapps from "./models/leaveapps";
import staff from "./models/staff";
import nodemailer from 'nodemailer';
import session from "express-session";
const app = express();
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

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
    const {adm,dte,fname,lname,mble,dob,dad,mom,mail,branch,roll,proc,passwd,text} = req.body.studdata;
    const St = new studSchema({
        adm,dte,fname,lname,mble,dob,dad,mom,mail,branch,roll,proc,passwd,text
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

app.get('/studs/:id', async(req, res)=>{
    let students;
    let id = req.params.id;
    try{
        students = await studSchema.find({branch:id});
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
    res.send('Done');
});

app.get('/mailhod/:id', async(req, res)=>{
    let id = req.params.id;
    console.log(id);
    let hod;
    try{
        hod = await hodSchema.find({branch:id});
    }catch(err){
        console.log('Error');
    }
    console.log(hod);
    let targetmail = hod[0].mail;
    console.log(targetmail);
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gunavardhanp2004@gmail.com',
        pass: 'mygm nrzl gfvn ehzf'
    }
    });

    var mailOptions = {
    from: 'gunavardhanp2004@gmail.com',
    to: targetmail,
    subject: 'Leave Application',
    text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.send(targetmail);
});

app.post('/addleave', (req,res) => {
    console.log(req.body.leave);
    const {lt,from,to,desc,roll,name,branch,status} = req.body.leave;
    const Leave = new leaveapps({
        lt,from,to,desc,roll,name,branch,status
    })
    Leave.save()
    res.send({msg:'done',result:Leave});
});

app.get('/leavedet/:id', async(req, res)=>{
    let id = req.params.id;
    let stud;
    try{
        stud = await leaveapps.find({branch:id, status:'pending'});
    }catch(err){
        console.log(err);
    }
    res.send(stud);
});

app.post('/procleavedet', async(req, res)=>{
    let {d, p} = req.body;
    let stud, studs=[];
    try{
        stud = await studSchema.find({branch:d, proc:p});
        console.log(stud);
        for(let i=0;i<stud.length;i++){
            let data = await leaveapps.find({roll:stud[i].roll, status:'pending'});
            if(data.length) studs.push(data[0]);
        }
        console.log(studs);
    }catch(err){
        console.log(err);
    }
    res.send(studs);
})

app.get('/staff/:id', async(req, res)=>{
    let id = req.params.id;
    let st;
    try{
        st = await staff.find({dept:id}, {fname:1, lname:1, _id:0});
    }catch(err){
        console.log(err);
    }
    if(st) res.send(st);
    else res.send([]);
});

app.post('/lvstatus', async(req, res)=>{
    let {roll, msg} = req.body;
    let stat;
    stat = await leaveapps.updateOne({roll: roll, status:'pending'}, {$set:{status:msg}});
    console.log(stat);
    res.send('Done');
});

app.use('/stafflogdetails/:id', async(req, res)=>{
    let id = req.params.id;
    let stf;
    try{
        stf = await staff.find({eid:id});
    }catch(err){
        console.log(err);
    }
    if(stf) res.send(stf);
    else res.send("");
})