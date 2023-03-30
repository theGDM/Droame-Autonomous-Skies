import Customer from "../models/Customer.js";
import Booking from "../models/Booking.js";

export const createBooking = async (req, res, next) => {
    const customerId = req.params.customerId;

    const newBooking = await Booking({
        customerId: customerId,
        droneNumber: req.body.droneNumber,
        duration: req.body.duration
    });

    try {
        const savedBooking = await newBooking.save();
        try {
            await Customer.findByIdAndUpdate(customerId, { $push: { bookings: savedBooking._id } });//this will add the booking in the bookings array of the customer
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedBooking);
    } catch (err) {
        next(err);
    }
}

export const updateBooking = async (req, res, next) => {
    let { id } = req.params; //booking id
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        ); //it returns the previous booking json data, so we need to send new : true
        res.status(200).json(updatedBooking);
    } catch (err) {
        next(err);
    }
}

export const deleteBooking = async (req, res, next) => {
    const customerId = req.params.customerId;
    const bookingId = req.params.id;
    console.log(customerId + " " + bookingId);
    try {
        await Booking.findByIdAndDelete(bookingId);
        try {
            await Customer.findByIdAndUpdate(customerId, { $pull: { bookings: bookingId } });//this will delete the booking in the booking array of customer schema
        } catch (err) {
            next(err);
        }
        res.status(200).json("Booking has been deleted");
    } catch (err) {
        next(err);
    }
}

export const getBooking = async (req, res, next) => {
    let { id } = req.params; //customer id
    try {
        const booking = await Booking.findById(id);
        res.status(200).json(booking);
    } catch (err) {
        next(err);
    }
}

export const getAllBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (err) {
        next(err);
    }
}

