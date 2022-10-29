import React, {useState, useEffect} from 'react'
import './CustomerSecond.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { DoorSliding, LocationCity, MoreHoriz, Settings } from '@mui/icons-material';
import { Button } from '@mui/material';
import BaseURL from '../BaseUrl';
import swal from 'sweetalert';
function CustomerSecond() {
  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [imageToBe, setImageToBe] = useState(null);
  const [useful, setUseful] = useState([]);

  const [bookedInfo, setBookedInfo] = useState([]);


  useEffect(()=>{
    const realThree = async () => {
      const SendId = userId;
      const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
      setImageToBe(`${BaseURL}/users/${request.data.hostSpecific.image}`);
      setUseful(request.data.hostSpecific);
    }
    realThree();
  },[userId]);

  useEffect(()=>{
    const realFour = async () => {
      const request = await axios.get(`${BaseURL}/api/get-booked-info/${userId}`);
      if(request.data.status === 200) {
        setBookedInfo(request.data.bookingInfo);
      }
    }
    realFour();
  },[userId]);


  const handleDeleteBooking = async (id) => {
      const willDelete = await swal({
          title: "Are you sure?",
          text: "Are you sure that you want to cancel booking? if no click outside the box",
          icon: "warning",
          dangerMode: true,
      });
 
      if (willDelete) {
          const res = await axios.delete(`${BaseURL}/api/delete-customer-booking/${id}`);

          if(res.data.status === 200)
          {
          swal("Deleted!", `${res.data.message}`, "success");
          Navigate('/customer-main-account');
          }
      }
  }

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
      <div className='customer_second__page'>
  
          <div className='customer_second__info'>
             <div className="customer_second__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" onClick={()=> Navigate('/customer-profile')} /></div>
                  <div>
                      <h4>{useful.first_name}</h4>
                      <p>Customer</p>
                  </div>
                  <div className='customerSecondMenuBar' onClick={handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}><MoreHoriz /> </h2></div>
              </div>
              {showMenuBar ?
              <p>Navigation</p>
              :
              null
              }
  
              {showMenuBar ?
              <ul className='host-navigation'>
                <li onClick={()=> Navigate('/customer-main-account')}>Dashboard</li>
                <li  style={{ backgroundColor: '#ff7779' }}>Booked houses</li>
                <li onClick={()=> Navigate('/customer-profile')}>Profile</li>
                <li
                onClick={()=> {
                  Navigate('/customer-settings');
                }}><Settings style={{ margin: 'auto 5px' }} /> Settings</li>
                <li onClick={()=> {
                  localStorage.removeItem("user-info");
                  Navigate('/');
                }}
                className='baby'>Logout</li>
              </ul>
              :
              null
              }
             </div>
             <div className="customer_second__info-right">
              {bookedInfo && bookedInfo.map((object, index)=>{
                    let loco = new Date(object.start_date);
                    var dateTo =  loco.toLocaleDateString(loco);

                    let loco2 = new Date(object.end_date);
                    var dateTo2 =  loco2.toLocaleDateString(loco2);

                    let loco3 =  new Date().getDate();
                    let loco5 = new Date(object.start_date).getDate();

                    let loco6 = loco5 - loco3;

                return(
                  <div className='customer_second__info-right-container' key={index}>
                    <div className='customer_second__info-right-container-left'>
                      <div className='customer_second__info-right-container-left-top'>
                        <img src={`${BaseURL}/uploads/${object.cover}`} alt="" />
                      </div>
                      <div className='customer_second__info-right-container-left-bottom'>
                        <h4>{object.title}</h4>
                        <p>{object.description}</p>
                        <h4><LocationCity style={{ margin: 'auto 5px' }} /> {object.location}</h4>
                        <span><strong>${object.price} / night </strong></span>
                      </div>
                    </div>
                    <div className='customer_second__info-right-container-right'>
                      <div className='customer_second__info-right-container-right-details'>
                        <p>No. of guests: <strong style={{ margin: 'auto 5px' }}>{object.number_of_guests}</strong></p>
                        <p>No. of days: <strong style={{ margin: 'auto 5px' }}>{object.number_of_days}</strong></p>
                        <p>No. of hours: <strong style={{ margin: 'auto 5px' }}>{object.number_of_hours}</strong></p>
                        <p>Total price: <strong style={{ margin: 'auto 5px' }}>{object.total_price}</strong></p>
                        <p>Start date: <strong style={{ margin: 'auto 5px' }}>{dateTo}</strong></p>
                        <p>End date: <strong style={{ margin: 'auto 5px' }}>{dateTo2}</strong></p>
                        <Button onClick={()=> {
                          Navigate(`/more-details/${object.house_id}`);
                        }}><DoorSliding /> More Details</Button>
                        {loco6 <= 2 ?
                          <p style={{ marginBottom: '10px' }}>Not possible to cancel booking</p>
                        :
                        <Button onClick={(e)=> handleDeleteBooking(object.bid)}>Cancel booking</Button>
                        }
                      </div>
                    </div>
                </div>
                );
              })}
             </div>
          </div>
  
      </div>
    )
  }

export default CustomerSecond