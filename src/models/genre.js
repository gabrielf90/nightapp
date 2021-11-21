import mongoose from 'mongoose'
const Schema = mongoose.Schema

const genre = new Schema({
    name:{
        type:String,
        required:true
    },
    registerDate:{
        type:Date,
        default:Date.now,
    }
})

export default mongoose.model('Genre', genre)