import React from 'react'
import './addbooking.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import logo from './images/logo.png'

function AddBooking() {
    const [droneNumber, setDroneNumber] = useState();
    const [duration, setDuration] = useState(1);
    const [user, setUser] = useState();
    const navigate = useNavigate();

    let customer = JSON.parse(window.localStorage.getItem('customer')) || null;
    const [customerId, setCID] = useState(customer._id);

    const droneNumberChangeHandler = (e) => {
        setDroneNumber(e.target.value);
    }

    const durationChangeHandler = (e) => {
        setDuration(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { droneNumber, duration };
        console.log(user);
        // send the username and password to the server
        const response = await axios.post(
            `http://localhost:8800/api/bookings/${customerId}`,
            user
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
                        <input name="droneNumber" id="droneNumber" placeholder='droneNumber' type="number" onChange={droneNumberChangeHandler} />
                    </div>
                    <div className='box'>
                        <label for="duration">Duration</label>
                        <input name="duration" id="duration" placeholder='duration' type="duration" onChange={durationChangeHandler} />
                    </div>
                    <div className='button'>
                        <input type="submit" value="Add Booking" className='submitButton' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddBooking