import React, {useState, useEffect} from 'react'
import './BackSecond.css'
import Add from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Button } from '@mui/material';
import {useNavigate, useParams} from 'react-router-dom'
import BaseURL from '../../../BaseUrl';

function BackSecond() {
  const params = useParams();
  const paramaId = params.id;

  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [imageToBe, setImageToBe] = useState(null);
  const [realDetails, setRealDetails] = useState([]);
  const [editGuests, setEditGuests] = useState('');
  const [editBedrooms, setEditBedrooms] = useState('');
  const [editBeds, setEditBeds] = useState('');
  const [editBathtubs, setEditBathtubs] = useState('');

  const Navigate = useNavigate();

  useEffect(()=>{
    const realTwo = async () => {
      const love = await axios.get(`${BaseURL}/api/get-moon-details/${paramaId}`);
      if(love.data.status === 200){
      setRealDetails(love.data.moon);
      setEditGuests(love.data.moon.max_no_of_guests)
      setEditBedrooms(love.data.moon.number_of_bedrooms);
      setEditBeds(love.data.moon.number_of_beds);
      setEditBathtubs(love.data.moon.number_of_bathtubs);
      }
    }
    realTwo();
  },[paramaId])

  useEffect(()=>{
    const realThree = async () => {
      const SendId = userId;
      const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
      if(request.data.status === 200){
      setImageToBe(`${BaseURL}/users/${request.data.hostSpecific.image}`);
      }
    }
    realThree();
  },[userId]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const url = `${BaseURL}/api/update-fifty-details/${paramaId}`;
    const data = new FormData();
    data.append('guests', editGuests);
    data.append('bedrooms', editBedrooms);
    data.append('beds', editBeds);
    data.append('bathtubs', editBathtubs);
    data.append('userId', userId);
    data.append('house_id', paramaId);
    axios.post(url,data).then((res)=> {
      if(res.data.status === 200) {
        Navigate('/add-house-host-page-three');
        document.getElementById('updated').innerHTML = "updated";
      }
    });
  }

    //Scroll to the top on load
    useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load

    return (
      <div className='back-second__page'>
  
          <div className='back-second__info'>
             <div className="back-second__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" /></div>
                  <div>
                      <h4>Henry Klein</h4>
                      <p>Host</p>
                  </div>
                  <div><h2 style={{ display: 'flex', alignItems: 'center' }}>...</h2></div>
              </div>
              <p>Navigation</p>
  
              <ul className='host-navigation'>
                <li><Link to="/main-host-account" className='lilo-link'>DashBoard</Link></li>
                <li style={{ backgroundColor: '#ff7779' }}><Link to="/host-houses" className='lilo-link'>Your houses</Link></li>
                <li><Link to="/add-house-host" className='lilo-link'><Add /> house</Link></li>
                <li>Tenants Details</li>
                <li onClick={()=> Navigate('/host-profile')}>Host Profile</li>
                <li onClick={()=> Navigate('/host-profile')} className='baby'>Settings</li>
              </ul>
             </div>
             <div className="back-second__info-right">
              <form className="back-second__info-right-block" encType='multipart/form-data' onSubmit={handleUpdate}>
                <div className="back-second__info-right-input">
                  <label>Max no of guests</label>
                  <input type="number" name="title" value={editGuests} placeholder={realDetails.title} onChange={(e)=>setEditGuests(e.target.value)} />
                </div>

                <div className="back-second__info-right-input">
                  <label>No. of bedrooms</label>
                  <input type="number" name="description" value={editBedrooms} placeholder={realDetails.description} onChange={(e)=>setEditBedrooms(e.target.value)}></input>
                </div>

                <div className="back-second__info-right-input">
                  <label>No. of beds</label>
                  <input type="number" name="location" value={editBeds} placeholder={realDetails.location} onChange={(e)=>setEditBeds(e.target.value)} />
                </div>

                <div className="back-second__info-right-input">
                  <label>No. of bathtubs</label>
                  <input type="number" name="price" value={editBathtubs} placeholder={realDetails.price} onChange={(e)=>setEditBathtubs(e.target.value)} />
                </div>

                <div className="back-second__info-right-buttonOne"><Button type="submit">Update (2/4) </Button></div>

                <div className="back-second__info-right-buttonTwo">
                    <Button style={{ marginRight: '10px', backgroundColor: '#ff7779', color: 'white' }}
                    onClick={()=>{
                        Navigate('/add-house-host-page-three');
                    }}>next</Button>
                </div>
              </form>
             </div>
          </div>
  
      </div>
    )
  }

export default BackSecond