import Mongoose  from "mongoose";

const reservationSchema = Mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    etablissement:{
        type:String,
        required:true
    },
    classe:{
        type:String,
        required:true
    },
    vaccineCerteficate:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    accepted:{
        type:Boolean,
        default:false
    },
    inside:{
        type:Boolean,
        default:false
    },
    petitDej:{
        type:Boolean,
        default:false
    },
    food:{
        type:Boolean,
        default:false
    }
})

const reservationModel = Mongoose.model("reservations",reservationSchema)

export default  reservationModel