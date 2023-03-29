import './App.css';
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddCustomer from './components/addCustomer/AddCustomer';
import UpdateCustomer from './components/updateCustomer/UpdateCustomer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBooking from './components/addBooking/AddBooking';
import UpdateBooking from './components/updateBooking/UpdateBooking';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/booking/updatecustomer" element={<UpdateCustomer />} />
          <Route path="/booking/addbooking" element={<AddBooking />} />
          <Route path="/booking/updatebooking" element={<UpdateBooking />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
