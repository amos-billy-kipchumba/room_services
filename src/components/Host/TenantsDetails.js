import React, {useState, useEffect} from 'react'
import './TenantsDetails.css'
import Add from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import BaseURL from '../BaseUrl';
import { Button } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
function TenantsDetails() {
  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [userFirstName] = useState(userData.data.first_name);
  const [imageToBe, setImageToBe] = useState(null); 

  useEffect(()=>{
    const realThree = async () => {
      const SendId = userId;
      const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
      setImageToBe(`${BaseURL}/users/${request.data.hostSpecific.image}`);
    }
    realThree();
  },[userId]);


  const [totalBooked, setTotalBooked] = useState([]);
  useEffect(()=>{
    const realFour = async () => {
      const SendId = userId;
      const request = await axios.get(`${BaseURL}/api/get-total-booked-for-host/${SendId}`);
      setTotalBooked(request.data.bookingInfoForHost);
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

  //Scroll to the top on load
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  },[]);
  //End of Scroll to the top on load

    const Navigate = useNavigate();
    return (
      <div className='tenants-details__page'>
  
          <div className='tenants-details__info'>
             <div className="tenants-details__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" /></div>
                  <div>
                      <h4>{userFirstName}</h4>
                      <p>Host</p>
                  </div>
                  <div className='TenantsDetailsMenuBar' onClick={handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}><MoreHoriz /></h2></div>
              </div>
              {showMenuBar ?
              <p>Navigation</p>
              :
              null
              }
  
              {showMenuBar ?
              <ul className='host-navigation'>
                <li onClick={()=>{
                    Navigate('/main-host-account');
                }}>Dashboard</li>
                <li><Link to="/host-houses" className='lilo-link'>Your houses</Link></li>
                <li><Link to="/add-house-host" className='lilo-link'><Add /> house</Link></li>
                <li style={{ backgroundColor: '#F78513' }}>Tenants Details</li>
                <li onClick={()=> Navigate('/host-profile')}>Host Profile</li>
                <li onClick={()=> Navigate('/host-settings')} className='deal-done'>Settings</li>
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
             <div className="tenants-details__info-right">
             {totalBooked && totalBooked.map((object, index)=>{
                    let loco = new Date(object.start_date);
                    var dateTo =  loco.toLocaleDateString(loco);

                    let loco2 = new Date(object.end_date);
                    var dateTo2 =  loco2.toLocaleDateString(loco2);

                return(
                    <div className="tenants-details__info-rightMainContainer" key={index}>
                        <div className="tenants-details__info-rightMainContainerTop">
                            <img src={`${BaseURL}/users/${object.image}`} alt="" />
                        </div>
                        <div className="tenants-details__info-rightMainContainerBottom">
                            <label>Tenant's first name</label>
                            <p>{object.first_name}</p>
                            <label>Tenant's last name</label>
                            <p>{object.last_name}</p>
                            <label>Phone number</label>
                            <p>{object.booking_phone}</p>
                            <label>Email</label>
                            <p>{object.email}</p>
                            <label>House Name</label>
                            <p>{object.title}</p>
                            <label>Start Date</label>
                            <p>{dateTo}</p>
                            <label>End Date</label>
                            <p>{dateTo2 }</p>
                            <label>Duration of Stay</label>
                            <p>{object.number_of_days}</p>
                            <label>Number of guests</label>
                            <p>{object.number_of_guests}</p>
                            <label>Total price</label>
                            <p>${object.total_price}</p>
                            <div className="tenants-details__info-rightMainContainerBottomImage">
                                <img src={`${BaseURL}/uploads/${object.cover}`} alt="" /> 
                            </div>

                            <div className="tenants-details__info-rightMainContainerBottomButton">
                                <Button onClick={()=> {
                                    Navigate(`/more-details/${object.house_id}`);
                                }}>More</Button>
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

export default TenantsDetails