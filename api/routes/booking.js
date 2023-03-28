import express from 'express';
import { createBooking, deleteBooking, getAllBookings, getBooking } from '../controllers/bookingController.js';

const router = express.Router();

//CREATE'
router.post("/:customerId", createBooking);

//DELETE
router.delete("/:id/:customerId", deleteBooking);

//GET
router.get("/:id", getBooking);

//GET ALL
router.get("/", getAllBookings);

export default router;