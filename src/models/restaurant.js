import mongoose from 'mongoose'
const Schema = mongoose.Schema

const restaurant = new Schema({
    country:{
        type:String,
        required:true
        },
    promoterId:{
        type:mongoose.Types.ObjectId,
        ref:'Promoter',
        required:true
    },
    name:{
        type:String,
       required:true
    },
    openTime:{
        days:{Number},
        time:Date
    },
    category:{
        _id:mongoose.Types.ObjectId,
        name:String
    },
    description:String,
    type: {
        type: String,
        enum: ["BAR", "RESTAURANTE"],
        required: true
    },
    genre:{
     Type:mongoose.Types.ObjectId   
    },
    cityName:String,
    googleLink:String,
    rc:String,  
    photo: {
        location: String,
        key: String,
    },
    tags:[],
    registerDate:{
        type:Date,
        default:Date.now,
    }
})

export default mongoose.model('Restaurant', restaurant)