import React, {useState} from 'react'
import './Checkout.css'
import {useParams, useNavigate} from 'react-router-dom'
import { Button } from '@mui/material';
import { CardGiftcard } from '@mui/icons-material';
import axios from 'axios';
import BaseURL from '../BaseUrl';
import swal from 'sweetalert';
function Checkout() {
    const params = useParams();
    const paramaId = params.paramaId;

    const bookingData = JSON.parse(localStorage.getItem('booking-data'));
    const [numberOfGuests] = useState(bookingData.numberOfGuests);
    const [numberOfHours] = useState(bookingData.hourDuration);
    const [startDate] = useState(bookingData.customerStartDateRAW);
    const [endDate] = useState(bookingData.customerEndDateRAW);
    const [customerId] = useState(bookingData.customerId);
    const [totals] = useState(bookingData.totalPrice);

    const [bookingPhone, setBookingPhone] = useState('');
    const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById('submit').innerHTML = "waiting ...";

    const formData = new FormData();
    formData.append('number_of_guests', numberOfGuests);
    formData.append('number_of_hours', numberOfHours);
    formData.append('house_id', paramaId);
    formData.append('user_id', customerId);
    formData.append('start_date', startDate);
    formData.append('end_date', endDate);
    formData.append('number_of_days', numberOfGuests);
    formData.append('total_price', totals);
    formData.append('booking_phone', bookingPhone);
    
    const url = `${BaseURL}/api/add-booking-info`;
    const request = await axios.post(url, formData);
    if(request.data.status === 200) {
      swal('success','booked successfully','success');
      document.getElementById('submit').innerHTML = "booked";
      localStorage.removeItem('booking-data');
      Navigate('/customer-second-page');
    }
  }
  return (
    <div className='checkout-container'>
        <form className='checkout-and-pin'>
            <label>Please enter your phone number</label>
            <input type="phone"
             min="0"
             max="9999" 
             placeholder='PHONE NUMBER'
             required
             value={bookingPhone}
             onChange={(e) => {
              setBookingPhone(e.target.value);
             }} />
            <Button onClick={handleSubmit} id="submit">Book</Button>
            <CardGiftcard />
        </form>
    </div>
  )
}

export default Checkout