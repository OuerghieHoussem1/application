import  express  from "express";
import cors from "cors"
import mongoose from 'mongoose';
import fs from "fs"

import fileUpload from "express-fileupload"

import path from "path";

import { v4 as uuidv4 } from 'uuid';

import reservationModel from "./models/reservation.js"

import nodemailer from "nodemailer"

import QRCode from "qrcode"

const app = express()

app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(fileUpload())

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(cors())



const PORT = process.env.port



app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

app.post("/newReservation", async (req,res)=>{


    const {name,email,etablissement,classe} = req.body

    const emailUsed = await reservationModel.findOne({email})
    
        if(emailUsed) return  res.status(200).json(emailUsed)

    const code = uuidv4().slice(0,5)
    const verificationVaccin = req.files["files[]"]
    console.log(name)
    console.log(verificationVaccin)

    let codeUsed = await reservationModel.findOne({code})
    while(codeUsed){
        const code = uuidv4().slice(0,5)
        codeUsed = await reservationModel.find({code})
    }

    

    await QRCode.toString(code,{type:'terminal'}, function (err, url) {
        console.log(url)
    })


    await QRCode.toFile(`./public/codes/${code}.png`,code)
    

    verificationVaccin.mv("./public/certeficates/"+`${name}-${verificationVaccin.name}`)
    const reservation = await reservationModel.create({name,email,code,etablissement,classe,vaccineCerteficate:`${name}-${verificationVaccin.name}`})
    
    return res.status(200).json(reservation)
})


app.post("/checkEmail", async (req,res)=>{
    const {email} = req.body

    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    const test = re.test(String(email).toLowerCase())
    if(!test) return res.status(500).json({error:"email non valide"})


    const emailUsed = await reservationModel.findOne({email})
    
    if(emailUsed) return res.status(500).json({error:"email deja utilisé"})
    

    return res.status(200).json(true)
    
})

app.post("/checkReservation",async (req,res) => {
    const {code} = req.body
    const reservation = await reservationModel.findOne({code})
    if(!reservation) return res.status(400).json({error:"error"})
    res.json(reservation)
})


app.post("/enterReservation",async (req,res) => {
    const {code} = req.body
    const reservation = await reservationModel.findOneAndUpdate({code},{inside:true},{new:true})
    res.json(reservation)
})

app.post("/startEating",async (req,res) => {
    const {code} = req.body
    const reservation = await reservationModel.findOneAndUpdate({code},{food:true},{new:true})
    console.log(reservation)
    res.json(reservation)
})

app.post("/startPetitDej",async (req,res) => {
    const {code} = req.body
    const reservation = await reservationModel.findOneAndUpdate({code},{petitDej:true},{new:true})
    console.log(reservation)
    res.json(reservation)
})

app.post("/getReservations",async (req,res) => {
    const reservations = await reservationModel.find()
    console.log(reservations)
    return res.status(200).json(reservations)
})

app.post("/acceptReservation",async (req,res)=>{
    const {code} = req.body
    console.log(req.body)
    const reservation = await reservationModel.findOneAndUpdate({code},{accepted:true},{new:true})


     const transporter = nodemailer.createTransport({
        host: "smtp-jpo-reservation.alwaysdata.net",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "jpo-reservation@alwaysdata.net", // generated ethereal user
          pass: "gta_V123456789", // generated ethereal password
        },
    });

     const info = await transporter.sendMail({
        from: 'JPO Reservation', // sender address
        to: reservation.email, // list of receivers
        subject: "Réservation effectué", // Subject line
        text: `Mr/Mme ${reservation.name} votre qr code est ${reservation.code}`, // plain text body;
        attachments:[
            {
                filename:`votreCode.png`,
                content: fs.createReadStream(`./public/codes/${reservation.code}.png`)
            }
            
        ]
      });

    res.json(reservation)
})

app.post("/refuseReservation",async (req,res)=>{
    const {code} = req.body
    console.log(req.body)
    const reservation = await reservationModel.findOneAndUpdate({code},{accepted:false},{new:true})
    res.json(reservation)
})

const CONNECTION_URL = "mongodb+srv://botka:xJM6tSRDWQht7WS@cluster0.kvf0m.mongodb.net/JPO?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("connected to data base")
    app.listen(process.env.PORT ,()=>{
        console.log(`server listening on port ${PORT}`)
    })
}).catch(()=>{
    console.error("error connecting")
})

//process.env.PORT
