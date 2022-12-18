import React, {useState, useEffect} from 'react'
import './Reserve.css'
import axios from 'axios'
import { Button } from '@mui/material';
import { CheckOutlined } from '@mui/icons-material';
import {useNavigate} from 'react-router-dom'
import BaseURL from '../BaseUrl';
import {useSearchParams} from 'react-router-dom'
function Reserve() {

    // http://localhost:3000/customer-house-room-reservation?name=Makuti%20villa&id=1&c-id=2&c-first=Client&c-email=clienttest950@gmail.com&c-phone=0789567845&h-email=mainhost80@gmail.com&start-date=Sun%20Dec%2018%202022%2000:00:00%20GMT+0300%20(East%20Africa%20Time)&end-date=Tue%20Dec%2020%202022%2000:00:00%20GMT+0300%20(East%20Africa%20Time)&desc=a%20great%20place%20to%20be&image=FDIpJGil9PZU9KthdIHsUfx0K11z4YMJ.jpg&price=1&total=2&guests=1&hours=48&location=Kilifi


    const [searchParams] = useSearchParams();
    
    var id = searchParams.get('id');

    var numberOfGuests = searchParams.get('guests');

    var numberOfHours = searchParams.get('hours');


    var numberOfPrice = searchParams.get('total');

    var c_first = searchParams.get('c-first');

    var c_id = searchParams.get('c-id');

    var c_email = searchParams.get('c-email');

    var c_phone = searchParams.get('c-phone');

    var h_mail = searchParams.get('h-email');

    var start_date = searchParams.get('start-date');

    var end_date = searchParams.get('end-date');

    const [editImage, setEditImage] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');
    const [editLocation, setEditLocation] = useState('');
    const [editPrice, setEditPrice] = useState('');


    useEffect(() => {
      const realTwo = async () => {
        let right = id;
        const love = await axios.get(`${BaseURL}/api/get-magic-details/${right}`);
        setEditImage(`${BaseURL}/uploads/${love.data.hello.cover}`);
        setEditTitle(love.data.hello.title);
        setEditDescription(love.data.hello.description);
        setEditLocation(love.data.hello.location);
        setEditPrice(love.data.hello.price);
      }

      realTwo();
    },[id]);

    const Navigate = useNavigate();

    const [showTick, setShowTick] = useState(false);
  return (
    <div className="reserve-container">
      <div className="reserve-container-handler">
        <div className='reserve-container-handler-image'>
          <img src={editImage} alt="" />
        </div>
        <div className='reserve-container-handler-description'>
          <div className='reserve-container-handler-description-now'>
            <label>Title</label>
            <p>{editTitle}</p>
            <label>Description</label>
            <p>{editDescription}</p>
            <label>Price</label>
            <p>ksh {editPrice} / night</p>
            <label>Location</label>
            <p>{editLocation}</p>
            <Button onClick={()=>{
              Navigate(`/all-house-images-when-booking?name=${editTitle}&id=${id}`);
            }}>View all house images</Button>
          </div>
          <div className='reserve-container-handler-description-then'>
            <label>Number of days</label>
            <p>{numberOfHours / 24}</p>
            <label>Number of hours</label>
            <p>{numberOfHours}</p>
            <label>Number of visitors</label>
            <p>{numberOfGuests}</p>
            <label>Total price</label>
            <p>ksh {numberOfPrice}</p>
            <Button onClick={()=> {
              Navigate(`/customer-house-room-checkout?name=${editTitle}&id=${id}&c-id=${c_id}&c-first=${c_first}&c-email=${c_email}&c-phone=${c_phone}&h-email=${h_mail}&start-date=${start_date}&end-date=${end_date}&desc=${editDescription}&image=${editImage}&price=${editPrice}&total=${numberOfPrice}&guests=${numberOfGuests}&hours=${numberOfHours}&location=${editLocation}`);
            }} onMouseEnter={()=>{
              setShowTick(!showTick)
            }} onMouseLeave={()=>{
              setShowTick(!showTick)
            }}>Check out {showTick !== false ? <CheckOutlined style={{ marginLeft: '5px' }} /> : null }</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reserve