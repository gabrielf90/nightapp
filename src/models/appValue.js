import mongoose from 'mongoose'
const Schema = mongoose.Schema

const appValue = new Schema({
    comission:{
        type:Number,
        required:true
    },
    walletId:String
})

export default mongoose.model('AppValue', appValue)