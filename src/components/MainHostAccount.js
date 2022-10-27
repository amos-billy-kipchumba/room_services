import React, {useState, useEffect} from 'react'
import './MainHostAccount.css'
import Add from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { House, People } from '@mui/icons-material';
import BaseURL from './BaseUrl';
function MainHostAccount() {
  const Navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [userFirstName] = useState(userData.data.first_name);
  const [imageToBe, setImageToBe] = useState(null);
  const [houseData, setHouseData] = useState([]);

  useEffect(()=>{
    const realThree = async () => {
      const SendId = userId;
      const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
      setImageToBe(`${BaseURL}/users/${request.data.hostSpecific.image}`);
    }
    realThree();
  },[userId]);

  useEffect(()=> {
    const realHostHouses = async () => {
      const SendId = userId;
      const request = await axios.get(`${BaseURL}/api/get-host-houses-details/${SendId}`)
      setHouseData(request.data.hostHousesDetails);
    }
    realHostHouses();
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

  //Scroll to the top on load
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  },[]);
  //End of Scroll to the top on load
    return (
      <div className='main-host-account__page'>
  
          <div className='main-host-account__info'>
             <div className="main-host-account__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" /></div>
                  <div>
                      <h4>{userFirstName}</h4>
                      <p>Host</p>
                  </div>
                  <div><h2 style={{ display: 'flex', alignItems: 'center' }}>...</h2></div>
              </div>
              <p>Navigation</p>
  
              <ul className='host-navigation'>
                <li style={{ backgroundColor: '#ff7779' }}>Dashboard</li>
                <li><Link to="/host-houses" className='lilo-link'>Your houses</Link></li>
                <li><Link to="/add-house-host" className='lilo-link'><Add /> house</Link></li>
                <li onClick={()=>{
                  Navigate('/tenants-details');
                }}>Tenants Details</li>
                <li onClick={()=> Navigate('/host-profile')}>Host Profile</li>
                <li onClick={()=> Navigate('/host-settings')} className='deal-done'>Settings</li>
              </ul>
             </div>
             <div className="main-host-account__info-right">
                <div 
                className='main-host-account__info-rightHousesCard'
                onClick={()=> {
                  Navigate('/host-houses');
                }}>
                  <h2><House /> houses</h2>
                  <span>{houseData.length}</span>
                </div>

                <div className='main-host-account__info-rightCustomerCard' onClick={()=>{
                  Navigate('/tenants-details');
                }}>
                  <h2><People /> tenants</h2>
                  <span>{totalBooked.length}</span>
                </div>
             </div>
          </div>
  
      </div>
    )
  }

export default MainHostAccount