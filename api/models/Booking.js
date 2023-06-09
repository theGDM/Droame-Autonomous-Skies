import mongoose, { Schema } from 'mongoose';

const BookingSchema = new mongoose.Schema({
    customerId: {
        type: Schema.ObjectId,
        required: true,
    },
    droneNumber: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true
    }
}, { timestamps: true }); //it gonna give created and updated at times

export default mongoose.model("Booking", BookingSchema);