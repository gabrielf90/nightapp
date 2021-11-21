import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ticket = new Schema({
    partyId: {
        type: mongoose.Types.ObjectId,
        ref: 'Party',
        required: true
    },
    status: {
        type: String,
        enum: ['A', 'I'],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dataStart: {
        type: Date,
        required: true
    },
    dataEnd: {
        type: Date,
        required: true
    },
    token: [
        {
            name: String,
            price: Number,
            qnt:Number
        }
    ],

    registerDate: {
        type: Date,
        default: Date.now,
    }
})

export default mongoose.model('Ticket', ticket)