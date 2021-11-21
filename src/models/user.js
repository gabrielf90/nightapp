import mongoose from 'mongoose'
const Schema = mongoose.Schema

const user = new Schema({
    country:{
    type:String,
    required:true
    },
    name:{
        type:String,
        required:[true, 'Nome é obrigatório']
    },
    email:{
        type:String,
        required:[true, 'Email é obrigatório']
    },
    password:{
        type:String,
        required:[true, 'Senha é obrigatório']
    },
    cpfCnpj:{
        type:String,
        required:[true, 'CPF ou CNPJ é obrigatório']
    },
    photo: {
        location: String,
        key: String,
    },
    mobilePhone:String,
    customerId:String,
    registerDate:{
        type:Date,
        default:Date.now,
    }
})

export default mongoose.model('User', user)