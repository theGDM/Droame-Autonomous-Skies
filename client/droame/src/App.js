import './App.css';
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddCustomer from './components/addCustomer/AddCustomer';
import UpdateCustomer from './components/updateCustomer/UpdateCustomer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
