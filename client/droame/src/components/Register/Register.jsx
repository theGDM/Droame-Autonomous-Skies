import React, { useContext, useEffect } from 'react'
import './register.css';
import logo from './images/logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [touristPlace, setPlace] = useState("");
    const [droneNumbers, setDroneNumbers] = useState(0);
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const userNameChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const placeChangeHandler = (e) => {
        setPlace(e.target.value);
    }

    const droneNumberChangeHandler = (e) => {
        setDroneNumbers(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, password, email, touristPlace, droneNumbers };
        console.log(user);
        // send the username and password to the server
        const response = await axios.post(
            "http://localhost:8800/api/auth/register",
            user
        );
        // set the state of the user
        setUser(response.data);
        navigate("/login");
        console.log(response.data);
    };

    return (
      <>
        <div className='wrapper'>
            <div className='header'>
                <img src={logo} alt="logo" className='logo2'/>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='box'>
                    <label for="username">Username</label>
                    <input name="username" id="username" placeholder='username' type="text" onChange={userNameChangeHandler}/>
                </div>
                <div className='box'>
                    <label for="email">Email</label>
                    <input name="email" id="email" placeholder='email' type="email" onChange={emailChangeHandler}/>
                </div>
                <div className='box'>
                    <label for="touristPlace">Tourist Place</label>
                    <input name="touristPlace" id="touristPlace" placeholder='tourist place' type="text" onChange={placeChangeHandler}/>
                </div>
                <div className='box'>
                    <label for="droneNumbers">Total Drones</label>
                        <input name="droneNumbers" id="droneNumbers" placeholder='total drones' type="number" onChange={droneNumberChangeHandler} />
                </div> 
                <div className='box'>
                    <label for="password">Password</label>
                    <input name="password" id="password" placeholder='***********' type="password" onChange={passwordChangeHandler}/>
                </div>  
                <div className='button'>
                    <input type="submit" value="Register Now" className='submitButton'/>
                </div>
           </form>
        </div>
      </>
  )
}

export default Register;