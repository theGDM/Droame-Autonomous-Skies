import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Booking.css';
import useFetch from '../../hooks/useFetch';
import bg2 from './images/bg2.jpg';
import dimg from './images/dpic.png';
import { useState } from 'react';

function Booking() {
    const user = JSON.parse(window.localStorage.getItem('user')) || null;
    const [deleted, setDelete] = useState(false);
    const { data, loading, error } = useFetch("http://localhost:8800/api/customers");
    console.log(data);

    let list = data.filter((item) => {
        return item.OperatorId == user?._id;
    });

    const onClickHandleUpdate = async (cusData) => {
        console.log(cusData);
        window.localStorage.removeItem("customer");
        localStorage.setItem("customer", JSON.stringify(cusData));
    }

    const onClickHandleDelate = async (cusData) => {
        const response = await fetch(`http://localhost:8800/api/customers/${cusData._id}`, {
            method: "DELETE",
        });
        setDelete(!deleted);
    }

    return (
        <>
            <Navbar />
            <img className='bg2' src={bg2} alt='bg-img' />
            {user == null ? (`You are Not Logged in!`) : (
                <>
                    <div className='heading'>
                        <div className='place'>{user.touristPlace}</div>
                        <Link to='/addcustomer' style={{ textDecoration: 'none' }} >
                            <div className='add'>Add Customer</div>
                        </Link>
                    </div>
                    <div className='drones'>
                        {[...Array(user.droneNumbers)].map((d, i) => (
                            <div className='droneItme'>
                                <img src={dimg} alt='droneImg' className='dimg' />
                                <p>Drone {i + 1}</p>
                            </div>
                        ))}
                    </div>
                    <h1 className='customerHead'>Customers</h1>
                    <div className='customers'>
                        {list && list.map((item, i) => (
                            <div className='customerCard' key={item._id}>
                                <div className='cusItem'>{item.name}</div>
                                <div className='cusItem'>{item.email}</div>
                                <div className='cusItem'>{item.phoneNumber}</div>
                                {item.bookings.length > 0 ? (<p className='bookingHead'>Bookings</p>) : (<></>)}
                                {item.bookings && item.bookings.map((bookItem, i) => (
                                    <div className='bookPara'>&#x2022; Drone {bookItem.droneNumber} booked  for {bookItem.duration} Hrs</div>
                                ))}
                                <div className='cusButtons'>
                                    <Link to='updatecustomer' style={{ textDecoration: 'none' }} className="customUp">
                                        <div className='updatecustomer' onClick={() => onClickHandleUpdate(item)}>Update</div>
                                    </Link>
                                    <div className='deleteCustomer' onClick={() => onClickHandleDelate(item)}>Delete</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    )
}

export default Booking;