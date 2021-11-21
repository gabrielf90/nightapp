import mongoose from 'mongoose'
const Schema = mongoose.Schema

const promoter = new Schema({
    country: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: [true, 'Nome é obrigatório']
    },
    email: {
        type: String,
        required: [true, 'Email é obrigatório']
    },
    password: {
        type: String,
        required: [true, 'Senha é obrigatório']
    },
    cpfCnpj: {
        type: String,
        required: true
    },
    companyType:{
        type:String,
        required:true
    },
    photo: {
        location: String,
        key: String,
    },
    phone: {
        type: String,
    },
    mobilePhone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    addressNumber: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    walletId: String,
    access_token: String,
    registerDate: {
        type: Date,
        default: Date.now,
    }

})



export default mongoose.model('Promoter', promoter)