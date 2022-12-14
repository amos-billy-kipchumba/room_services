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
    const [customer_email] = useState(bookingData.customerEmail);
    const [customer_first_name] = useState(bookingData.customerFirstName);
    const [host_email] = useState(bookingData.hostEmail);

    const [bookingPhone, setBookingPhone] = useState('');
    const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const number = '254';

    const concat = '' + number + bookingPhone;
    const finalNumber = Number(concat);


    document.getElementById('submit').innerHTML = "waiting ...";

    const formData = new FormData();
    formData.append('number_of_guests', numberOfGuests);
    formData.append('number_of_hours', numberOfHours);
    formData.append('house_id', paramaId);
    formData.append('user_id', customerId);
    formData.append('start_date', startDate);
    formData.append('end_date', endDate);
    formData.append('number_of_days', numberOfHours/24);
    formData.append('total_price', totals);
    formData.append('booking_phone', finalNumber);
    formData.append('customer_email', customer_email);
    formData.append('customer_first_name', customer_first_name);
    formData.append('host_email', host_email);

    const formData2 = new FormData();
    formData2.append('house_id', paramaId);
    formData2.append('user_id', customerId);
    formData2.append('booking_phone', finalNumber);
    formData2.append('total_price', totals);

    const url = `${BaseURL}/api/v1/stk/push`;
    const request = await axios.post(url, formData2);
    if(request.data.status === 200) {
      swal('success','booked successfully','success');
      document.getElementById('submit').innerHTML = "booked";
      localStorage.removeItem('booking-data');
      Navigate('/customer-second-page');

      console.log(request.data.bookingInfoForHost);
    }
  }
  return (
    <div className='checkout-container'>
        <form className='checkout-and-pin' onSubmit={handleSubmit}>
            <label htmlFor='tel'>
              Please enter your MPESA number. The number format should be for example : <strong>+254700256728</strong>
            </label>
            <div className='checkout-and-pin-tales'>
              <span>+254</span>
              <input type="tel"
              min="0"
              max="9999" 
              placeholder='PHONE NUMBER'
              required
              id='tel'
              title='+254#########'
              value={bookingPhone}
              pattern="\d{9}"
              onChange={(e) => {
                setBookingPhone(e.target.value);
              }} />
            </div>
            <Button type="submit" id="submit">Make it count</Button>
            <CardGiftcard />
        </form>
    </div>
  )
}

export default Checkout