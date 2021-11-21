import mongoose from 'mongoose'
const Schema = mongoose.Schema

const party = new Schema({
    country: {
        type: String,
        required: true
    },
    promoterId: {
        type: mongoose.Types.ObjectId,
        ref: 'Promoter',
        // required:true
    },
    promoterName: String,
    artists: String,
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        _id: mongoose.Types.ObjectId,
        name: String
    },
    genre: {
        _id: mongoose.Types.ObjectId,
        name: String
    },
    age:{
    type:String,
    required:true
    },
    cityName:String,
    description: String,
    status: {
        type: String,
        enum: ['A', 'C', 'I'],
        required: true
    },
    googleLink: String,
    rc: String,
    photo: {
        location: String,
        key: String,
    },
    tags: [],
    registerDate: {
        type: Date,
        default: Date.now,
    }
})

export default mongoose.model('Party', party)