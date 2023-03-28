import React from 'react'
import './addcustomer.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import logo from './images/logo.png'

function AddCustomer() {
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhone] = useState("");
    const [user, setUser] = useState();
    const navigate = useNavigate();

    let operator = JSON.parse(window.localStorage.getItem('user')) || null;
    const [oid, setOID] = useState(operator._id);

    const nameChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const phoneChangeHandler = (e) => {
        setPhone(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, email, phoneNumber, oid };
        console.log(user);
        // send the username and password to the server
        const response = await axios.post(
            `http://localhost:8800/api/customers/add/${oid}`,
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
                        <label for="name">Name</label>
                        <input name="name" id="name" placeholder='name' type="text" onChange={nameChangeHandler} />
                    </div>
                    <div className='box'>
                        <label for="email">Email</label>
                        <input name="email" id="email" placeholder='email' type="email" onChange={emailChangeHandler} />
                    </div>
                    <div className='box'>
                        <label for="phoneNumber">Phone Number</label>
                        <input name="phoneNumber" id="phoneNumber" placeholder='phone number' type="text" onChange={phoneChangeHandler} />
                    </div>
                    <div className='button'>
                        <input type="submit" value="Add Customer" className='submitButton' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddCustomer