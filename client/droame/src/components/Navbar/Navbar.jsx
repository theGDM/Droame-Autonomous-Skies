import React from 'react'
import './navbar.css';
import logo from './images/logo.png';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    let user = JSON.parse(window.localStorage.getItem('user')) || null;
    const [data, setData] = useState(user);
    let navigate = useNavigate();
    const onClickHandle = () => {
        user = window.localStorage.removeItem("user");
        setData(user);
        navigate('/');
    }

  return (
    <div className='navbar'>
          <div className="left">
              <Link to="/" style={{ textDecoration: 'none' }}>
                  <img className='companyLogo' src={logo} alt='logo' />
              </Link>
              <Link to="/booking" style={{ textDecoration: 'none' }}>
                  <div className='booking'>Booking</div>
              </Link>
          </div>
          <div className="right">
              {data ? (
                  <div className='afterLogin'>
                      <div className='textAfterLogin'>Welcome back {user.username}</div>
                      <div className='logout' onClick={onClickHandle}>Logout</div>
                  </div>
              ) : (
                  <>
                      <Link to="/register" style={{ textDecoration: 'none' }}>
                          <div className='register'>Register</div>
                      </Link>
                      <Link to="/login" style={{ textDecoration: 'none' }}>
                          <div className='login'>Login</div>
                      </Link>
                  </>
              )}
          </div>
    </div>
  )
}

export default Navbar;