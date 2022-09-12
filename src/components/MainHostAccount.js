import React, {useState, useEffect} from 'react'
import './MainHostAccount.css'
import Add from '@mui/icons-material/Add';
import HostImage from './Images/people/face20.jpg'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function MainHostAccount() {
  const navigate = useNavigate();
  const [houseData, setHouseData] = useState([]);

  const getHouseData = async () => {
    const data = await axios.get('http://127.0.0.1:8000/api/get-house-details');
    console.log(data.data);
    setHouseData(data.data.house_details);
  }

  useEffect(()=>{
    getHouseData();
  },[]);
  return (
    <div className='main-host-account__page'>

        <div className='main-host-account__info'>
           <div className="main-host-account__info-left">
            <div className='incase-you-know'>
                <div className="host-image"><img src={HostImage} alt="" /></div>
                <div>
                    <h4>Henry Klein</h4>
                    <p>Host</p>
                </div>
                <div><h2 style={{ display: 'flex', alignItems: 'center' }}>...</h2></div>
            </div>
            <p>Navigation</p>

            <ul className='host-navigation'>
              {houseData ?
                <>
                  <li style={{ backgroundColor: '#ff7779' }}>Dashboard</li>
                  <li>Your House or Room</li>
                  <li>Tenants Details</li>
                  <li>Host Profile</li>
                </>
                 :
                 <>
                  <li style={{ backgroundColor: '#ff7779' }}>Dashboard</li>
                  <li onClick={()=> navigate('/add-house-host')}><Add /> Add House or Room</li>
                  <li>Your House or Room</li>
                  <li>Tenants Details</li>
                  <li>Host Profile</li>
                 </>
                }
                
            </ul>
           </div>
           <div className="main-host-account__info-right">
            
           </div>
        </div>

    </div>
  )
}

export default MainHostAccount