import mongoose from 'mongoose'
const Schema = mongoose.Schema

const creditCard = new Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    creditCardNumber:{
        type:String,
        required:true
    },
    creditCardBrand:{
        type:String,
        required:true
    },
    creditCardToken:{
        type:String,
        required:true
    },
    registerDate:{
        type:Date,
        default:Date.now,
    }
})



export default mongoose.model('CreditCard', creditCard)