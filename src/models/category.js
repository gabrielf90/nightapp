import mongoose from 'mongoose'
const Schema = mongoose.Schema

const category = new Schema({
    photo: {
        location: String,
        key: String,
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

export default mongoose.model('Category', category)