import React, {useState} from 'react'
import './Checkout.css'
import { useNavigate,useSearchParams} from 'react-router-dom'
import { Button } from '@mui/material';
import { CardGiftcard } from '@mui/icons-material';
import axios from 'axios';
import BaseURL from '../BaseUrl';
import swal from 'sweetalert';
function Checkout() {
  
    const [searchParams] = useSearchParams();
    
    var paramaId = searchParams.get('id');

    var guests = searchParams.get('guests');

    var hours = searchParams.get('hours');

    var start_date = searchParams.get('start-date');

    var end_date = searchParams.get('end-date');

    var c_id = searchParams.get('c-id');

    var total = searchParams.get('total');

    var c_mail = searchParams.get('c-email');

    var c_first = searchParams.get('c-first');

    var h_email = searchParams.get('h-email');

    // name=${editTitle}&id=${id}&c-id=${c_id}&c-first=${c_first}&c-email=${c_email}&c-phone=${c_phone}&h-email=${h_mail}&start-date=${start_date}&end-date=${end_date}&desc=${editDescription}&image=${editImage}&price=${editPrice}&total=${numberOfPrice}&guests=${numberOfGuests}&hours=${numberOfHours}&location=${editLocation}

    const [numberOfGuests] = useState(guests);
    const [numberOfHours] = useState(hours);
    const [startDate] = useState(start_date);
    const [endDate] = useState(end_date);
    const [customerId] = useState(c_id);
    const [totals] = useState(total);
    const [customer_email] = useState(c_mail);
    const [customer_first_name] = useState(c_first);
    const [host_email] = useState(h_email);

    const [bookingPhone, setBookingPhone] = useState('');
    const Navigate = useNavigate();

    const [returnData, setReturnData] = useState("");

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
    const request = await axios.post(url, formData2).then(res=>{
      setReturnData(res.data.bookingInfoForHost[0].id);
    });

    if(request.data.status === 200) {
      const url = `${BaseURL}/api/add-booking-info`;

      formData.append('pay_id', returnData);
      const request = await axios.post(url, formData); 
      if(request.data.status === 200) {
        swal('success','booked successfully','success');
        document.getElementById('submit').innerHTML = "booked";
        localStorage.removeItem('booking-data');
        Navigate('/customer-second-page');
      }

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