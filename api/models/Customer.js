import mongoose, { Schema } from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    OperatorId: {
        type: Schema.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    bookings: {
        type: [new Object], //as it gonna contains, the id of customers, so it need to be array of string
    }
}, { timestamps: true }); //it gonna give created and updated at times

export default mongoose.model("Customer", CustomerSchema);