import mongoose from 'mongoose'
const Schema = mongoose.Schema

const product = new Schema({
    localId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    status: {
        type: String,
        enum: ['A', 'I'],
        required: true
    },
    status: {
        type: String,
        enum: ['A', 'I'],
        required: true
    },
    type:{
        type:String,
        required:true,
        enum:['FOOD', 'DRINK']
    },
    photo: {
        location: String,
        key: String,
    },
    qnt:Number,
    description:String,
    registerDate:{
        type:Date,
        default:Date.now,
    }
})

export default mongoose.model('Product', product)