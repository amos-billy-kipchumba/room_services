import React, {useState, useEffect} from 'react'
import './CustomerFirst.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { House, MoreHoriz, Settings } from '@mui/icons-material';
import BaseURL from '../BaseUrl';
function CustomerFirst() {
  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [imageToBe, setImageToBe] = useState(null);
  const [useful, setUseful] = useState([]);

  useEffect(()=>{
    const realThree = async () => {
      const SendId = userId;
      const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
      setImageToBe(`${BaseURL}/users/${request.data.hostSpecific.image}`);
      setUseful(request.data.hostSpecific);
    }
    realThree();

  },[userId]);


  const [totalBooked, setTotalBooked] = useState([]);
  useEffect(()=>{
    const realFour = async () => {
      const SendId = userId;
      const request = await axios.get(`${BaseURL}/api/get-total-booked/${SendId}`);
      setTotalBooked(request.data.totalBooked);
    }
    realFour();

  },[userId]);

    const [showMenuBar, setShowMenuBar] = useState(false);

    useEffect(()=>{
      if(window.innerWidth < 1024) {
        setShowMenuBar(false)
      }
    
      if(window.innerWidth > 1024) {
        setShowMenuBar(true);
      }
    },[]);

    const handleMenuBar = () => {
      setShowMenuBar(!showMenuBar);
      
    }

  const Navigate = useNavigate();
    return (
      <div className='customer_first__page'>
  
          <div className='customer_first__info'>
             <div className="customer_first__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" onClick={()=> Navigate('/customer-profile')} /></div>
                  <div>
                      <h4>{useful.first_name}</h4>
                      <p>Customer</p>
                  </div>
                  <div className='customerFirstMenuBar' onClick={handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}> <MoreHoriz /> </h2></div>
              </div>
              {showMenuBar ?
              <p>Navigation</p>
              :
              null 
              }
  
              {showMenuBar ?
              <ul className='host-navigation'>
                <li style={{ backgroundColor: '#F78513' }}>Dashboard</li>
                <li onClick={()=> Navigate('/customer-second-page')}>Booked houses</li>
                <li onClick={()=> Navigate('/customer-profile')}>Profile</li>
                <li onClick={()=> {
                  Navigate('/customer-settings');
                }}><Settings style={{ margin: 'auto 5px' }} /> Settings</li>
                <li onClick={()=> {
                  localStorage.removeItem("user-info");
                  Navigate('/');
                }}>Logout</li>
              </ul>
              :
              null
              }
             </div>
             <div className="customer_first__info-right">
              <div className='customer_first__info-rightBookedHouses'
              onClick={()=>{
                Navigate('/customer-second-page');
              }}>
                <House />
                <p style={{
                  marginLeft: '10px',
                  }}>Booked houses</p>
                <span style={{
                   marginLeft: '10px',
                   }}><strong>{totalBooked.length}</strong></span>
              </div>
             </div>
          </div>
  
      </div>
    )
  }

export default CustomerFirst