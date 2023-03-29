import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import logo from './images/logo.png'
import './updatebooking.css';

function UpdateBooking() {
    const booking = JSON.parse(window.localStorage.getItem('booking')) || null;
    const customer = JSON.parse(window.localStorage.getItem('customer')) || null;
    console.log(booking);
    const [droneNumber, setDroneNumber] = useState(booking.droneNumber);
    const [duration, setDuration] = useState(booking.duration);
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const droneNumberChangeHandler = (e) => {
        setDroneNumber(e.target.value);
    }

    const durationChangeHandler = (e) => {
        setDuration(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const book = { droneNumber, duration };
        console.log(book);
        // send the username and password to the server
        const response = await axios.put(
            `http://localhost:8800/api/bookings/${booking?._id}/${customer?._id}`,
            book
        );
        // set the state of the user
        setUser(response.data);
        navigate("/booking");
        console.log(response.data);
    };

    return (
        <>
            <div className='wrapper'>
                <div className='header'>
                    <img src={logo} alt="logo" className='logo2' />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='box'>
                        <label for="droneNumber">Drone Number</label>
                        <input name="droneNumber" id="droneNumber" placeholder='droneNumber' type="number" onChange={droneNumberChangeHandler} value={droneNumber} />
                    </div>
                    <div className='box'>
                        <label for="duration">Duration</label>
                        <input name="duration" id="duration" placeholder='duration' type="duration" onChange={durationChangeHandler} value={duration} />
                    </div>
                    <div className='button'>
                        <input type="submit" value="Update Booking" className='submitButton' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateBooking;