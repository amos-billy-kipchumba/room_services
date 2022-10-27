import React, {useState, useEffect} from 'react'
import './Reserve.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Button } from '@mui/material';
import { CheckOutlined } from '@mui/icons-material';
import {useNavigate} from 'react-router-dom'
import BaseURL from '../BaseUrl';
function Reserve() {
    const bookingData = JSON.parse(localStorage.getItem('booking-data'));
    const [numberOfGuests] = useState(bookingData.numberOfGuests);
    const [numberOfHours] = useState(bookingData.hourDuration);
    const [numberOfPrice] = useState(bookingData.totalPrice);

    const params = useParams();
    const paramaId = params.paramaId;

    const [editImage, setEditImage] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');
    const [editLocation, setEditLocation] = useState('');
    const [editPrice, setEditPrice] = useState('');


    useEffect(() => {
      const realTwo = async () => {
        let right = paramaId;
        const love = await axios.get(`${BaseURL}/api/get-magic-details/${right}`);
        setEditImage(`${BaseURL}/uploads/${love.data.hello.cover}`);
        setEditTitle(love.data.hello.title);
        setEditDescription(love.data.hello.description);
        setEditLocation(love.data.hello.location);
        setEditPrice(love.data.hello.price);
      }

      realTwo();
    },[paramaId]);

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
            <p>${editPrice} / night</p>
            <label>Location</label>
            <p>{editLocation}</p>
            <Button onClick={()=> {
              Navigate(`/all-house-images/${paramaId}`)
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
            <p>${numberOfPrice}</p>
            <Button onClick={()=> {
              Navigate(`/customer-house-room-checkout/${paramaId}`)
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