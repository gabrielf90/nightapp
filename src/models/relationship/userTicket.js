import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userTicket = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    ticketId: {
        type: mongoose.Types.ObjectId,
        ref: 'Ticket',
        required: true
    },
    tokenId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    paymentId:String,
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

export default mongoose.model('Userticket', userTicket)