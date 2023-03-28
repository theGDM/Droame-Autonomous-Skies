import mongoose from 'mongoose';

const OperatorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    droneNumbers: {
        type: Number,
        required: true
    },
    touristPlace: {
        type: String,
        required: true
    }
}, { timestamps: true }); //it gonna give created and updated at times

export default mongoose.model("Operator", OperatorSchema);