import mongoose from 'mongoose'
const Schema = mongoose.Schema

const city = new Schema({
    country:{
        type:String,
        required:true
        },
    name:{
        type:String,
        required:true
    },
    registerDate:{
        type:Date,
        default:Date.now,
    }
})

export default mongoose.model('City', city)