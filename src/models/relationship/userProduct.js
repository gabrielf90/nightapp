import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userProduct = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    status: {
        type: String,
        enum: ['A', 'I'],
        required: true
    },
    paymentId: String,
    registerDate: {
        type: Date,
        default: Date.now,
    }
})

export default mongoose.model('UserProduct', userProduct)