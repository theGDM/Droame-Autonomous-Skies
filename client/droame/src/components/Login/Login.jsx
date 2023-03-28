import React from 'react'
import logo from './images/logo.png';
import './login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const userNameChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        console.log(username);
        console.log(password);
        e.preventDefault();
        const user = { username, password };
        // send the username and password to the server
        const response = await axios.post(
            "http://localhost:8800/api/auth/login",
            user
        );
        // set the state of the user
        setUser(response.data)
        // store the user in localStorage
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(response.data);
        navigate('/');
    };

    return (
      <div className='wrapper'>
        <div className='header'>
              <img src={logo} alt="logo" className='logo2'/>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='box'>
                <label for="username">Username</label>
                  <input name="username" id="username" placeholder='username' type="text" onChange={userNameChangeHandler} />
              </div> 
            <div className='box'>
                <label for="password">Password</label>
                <input name="password" id="password" placeholder='***********' type="password" onChange={passwordChangeHandler} />
            </div>   
            <div className='button'>
                <input type="submit" value="Login Now" className='submitButton'/>
            </div>
        </form>
    </div>
  )
}

export default Login;