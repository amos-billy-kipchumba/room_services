import React, {useState, useEffect} from 'react'
import './HostHouses.css'
import Add from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import BaseURL from '../BaseUrl';

function HostHouses() {
  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userFirstName] = useState(userData.data.first_name);
  const [userId] = useState(userData.data.id);
  const [imageToBe, setImageToBe] = useState(null); 

 const realThree = async () => {
    const SendId = userId;
    const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
    setImageToBe(`${BaseURL}/users/${request.data.hostSpecific.image}`);
  }

  useEffect(()=>{
    realThree();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const [houseData, setHouseData] = useState([]);

  useEffect(()=> {
    const realHostHouses = async () => {
        const SendId = userId;
        const request = await axios.get(`${BaseURL}/api/get-host-houses-details/${SendId}`)
        setHouseData(request.data.hostHousesDetails);
      }
    realHostHouses();
  },[userId]);

  //Scroll to the top on load
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  },[]);
  //End of Scroll to the top on load

    const Navigate = useNavigate();
    return (
      <div className='host-houses-me__page'>
  
          <div className='host-houses-me__info'>
             <div className="host-houses-me__info-left">
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
                <li><Link to="/main-host-account" className='lilo-link'>Dashboard</Link></li>
                <li style={{ backgroundColor: '#ff7779' }}><Link to="/host-houses" className='lilo-link'>Your houses</Link></li>
                <li><Link to="/add-house-host" className='lilo-link'><Add /> house</Link></li>
                <li onClick={()=>{
                  Navigate('/tenants-details');
                }}>Tenants Details</li>
                <li onClick={()=> Navigate('/host-profile')}>Host Profile</li>
                <li onClick={()=> Navigate('/host-settings')} className='baby'>Settings</li>
              </ul>
             </div>
             <div className="host-houses-me__info-right">
             {houseData.length !== 0 ?
                <>
                {houseData && houseData.map((object, index)=>{
                    return(
                        <div 
                        className='host-houses-me__info-rightHousesCard'
                        onClick={()=> {
                          Navigate(`/edit-first/${object.id}`);
                        }}
                        key={index}>
                          <div className='host-houses-me__info-rightHousesCardImage'>
                            <img src={`http://127.0.0.1:8000/uploads/${object.cover}`} alt="" />
                          </div>
                          <div className='host-houses-me__info-rightHousesCardDetails'>
                            <h4>{object.title}</h4>
                            <p>{object.description}</p>
                            <p>{object.location}</p>
                            <span>${object.price} / night</span>
                          </div>
                        </div>
                    );
                 })}
                </>
                 :
                 <h2>No houses yet</h2>
                }
             
             </div>
          </div>
  
      </div>
    )
  }

export default HostHouses