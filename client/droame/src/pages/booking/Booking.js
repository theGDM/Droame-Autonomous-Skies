import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Booking.css';
import useFetch from '../../hooks/useFetch';
import bg2 from './images/bg2.jpg';
import dimg from './images/dpic.png';
import { useState } from 'react';

function Booking() {
    const user = JSON.parse(window.localStorage.getItem('user')) || null; //user here is operator
    const [deleted, setDelete] = useState(false);
    const customersData = useFetch("http://localhost:8800/api/customers");
    const data = customersData.data;
    // console.log(data);

    const bookingData = useFetch("http://localhost:8800/api/bookings");
    const data1 = bookingData.data;
    // console.log(data1);

    let list = data.filter((item) => {
        return item.OperatorId == user?._id;
    });

    //making the HashSet for booked drones
    let customerOnCurrPage = [];
    for (let i = 0; i < data.length; ++i) {
        if (data[i].OperatorId == user._id) {
            customerOnCurrPage.push(data[i]);
        }
    }
    // console.log(customerOnCurrPage);
    let set = new Set();
    for (let i = 0; i < customerOnCurrPage.length; ++i) {
        let bks = customerOnCurrPage[i].bookings;
        console.log(bks);
        for (let j = 0; j < bks.length; ++j) {
            for (let k = 0; k < data1.length; ++k) {
                if (data1[k]._id == bks[j]) {
                    set.add(data1[k].droneNumber);
                }
            }
        }
    }
    // console.log(set);

    //update and delete for customers
    const onClickHandleUpdate = async (cusData) => {
        console.log(cusData);
        window.localStorage.removeItem("customer");
        localStorage.setItem("customer", JSON.stringify(cusData));
    }

    const onClickHandleDelate = async (cusData) => {
        const response = await fetch(`http://localhost:8800/api/customers/${cusData._id}`, {
            method: "DELETE",
        });
        setDelete(response);
    }

    //update and deletion for booking
    const onClickHandleAddBooking = async (cusData) => {
        window.localStorage.removeItem("customer");
        localStorage.setItem("customer", JSON.stringify(cusData));
    }

    const onClickHandleUpdateBooking = async (cusData, bookingData) => {
        window.localStorage.removeItem("customer");
        localStorage.setItem("customer", JSON.stringify(cusData));
        window.localStorage.removeItem("booking");
        localStorage.setItem("booking", JSON.stringify(bookingData));
    }

    const onClickHandleDelateBooking = async (cusData, bookingData) => {
        const response = await fetch(`http://localhost:8800/api/bookings/${bookingData._id}/${cusData._id}`, {
            method: "DELETE",
        });
        setDelete(response);
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
                                <img src={dimg} alt='droneImg' className='dimg' id={set.has(i + 1) == true ? "bookedDrone" : ""} />
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
                                {data1 && data1.filter((bookingItem) => {
                                    return bookingItem.customerId == item._id;
                                }).map((bookItem, i) => (
                                    <>
                                        <div className='bookPara'>&#x2022; Drone {bookItem.droneNumber} booked for {bookItem.duration} Hrs</div>
                                        <div className='bookingButtons'>
                                            <Link to='updatebooking' style={{ textDecoration: 'none' }} className='updatebooking'>
                                                <div onClick={() => onClickHandleUpdateBooking(item, bookItem)}>Update</div>
                                            </Link>
                                            <div className='deleteBooking' onClick={() => onClickHandleDelateBooking(item, bookItem)}>Delete</div>
                                        </div>
                                    </>
                                ))}
                                <div className='allButtons'>
                                    <Link to='addbooking' style={{ textDecoration: 'none' }} className='bookingadd'>
                                        <div className='addBooking' onClick={() => onClickHandleAddBooking(item)}>AddBooking</div>
                                    </Link>
                                    <div className='cusButtons'>
                                        <Link to='updatecustomer' style={{ textDecoration: 'none' }} className="customUp">
                                            <div className='updatecustomer' onClick={() => onClickHandleUpdate(item)}>Update</div>
                                        </Link>
                                        <div className='deleteCustomer' onClick={() => onClickHandleDelate(item)}>Delete</div>
                                    </div>
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