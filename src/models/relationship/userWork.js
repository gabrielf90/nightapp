import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userWork = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    localId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    localType:{
        type:String,
        enum:['RESTAURANTE', "PARTY"],
        required:true
    },
    status: {
        type: String,
        enum: ['A', 'I'],
        required: true
    },
    registerDate: {
        type: Date,
        default: Date.now,
    }
})

export default mongoose.model('UserWork', userWork)