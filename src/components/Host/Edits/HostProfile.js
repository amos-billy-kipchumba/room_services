import React, {useState, useEffect, useRef} from 'react'
import './HostProfile.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { FaPen, FaTimes } from 'react-icons/fa';
import { Button } from '@mui/material';
import BaseURL from '../../BaseUrl';
import { Add, MoreHoriz } from '@mui/icons-material';
import swal from 'sweetalert';
function HostProfile() {
  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [imageToBe, setImageToBe] = useState(null);

  const [profileImage, setProfileImage] = useState(null);
  const [profileFirst, setProfileFirst] = useState('');
  const [profileLast, setProfileLast] = useState('');
  const [profileEmail, setProfileEmail] = useState('');
  const [profilePhone, setProfilePhone] = useState('');
  const [profilePassword, setProfilePassword] = useState('');

  useEffect(()=>{
    const realThree = async () => {
      const SendId = userId;
      const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
      setImageToBe(`${BaseURL}/users/${request.data.hostSpecific.image}`);
      setProfileImage(`${BaseURL}/users/${request.data.hostSpecific.image}`);
      setProfileFirst(request.data.hostSpecific.first_name);
      setProfileLast(request.data.hostSpecific.last_name);
      setProfileEmail(request.data.hostSpecific.email);
      setProfilePhone(request.data.hostSpecific.phone);
      setProfilePassword(request.data.hostSpecific.password);
    }
    realThree();
  },[userId]);

  const fileInputRef = useRef();

  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  useEffect(()=>{
    if(image !== null)
    {
        setProfileImage(image);
    }
  },[image]);


  useEffect(()=>{
    if(image) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        }
        reader.readAsDataURL(image);
    }
    else {
        setPreview(null);
    }
  },[image]);

  const Navigate = useNavigate();

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

  const handleUpdate = (e) => {
    const sendMe = userId;
    e.preventDefault();
    const url = `${BaseURL}/api/update-customer-profile-details/${sendMe}`;
    const data = new FormData();
    data.append('first_name', profileFirst);
    data.append('last_name', profileLast);
    data.append('email', profileEmail);
    data.append('phone', profilePhone);
    data.append('password', profilePassword);
    data.append('image', profileImage);
    data.append('userId', userId);
    axios.post(url,data).then(async(res)=> {

        if(res.status === 200) {
          swal('success',res.data.message,'success')
            Navigate('/main-host-account');
        }
    });
  }
    return (
      <div className='host-profile__page'>
  
          <div className='host-profile__info'>
             <div className="host-profile__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" /></div>
                  <div>
                      <h4>Henry Klein</h4>
                      <p>Host</p>
                  </div>
                  <div className='HostProfileMenu' onClick={handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}> <MoreHoriz /> </h2></div>
              </div>

              {showMenuBar ?
              <p>Navigation</p>
              :
              null
              }
  
              {showMenuBar ?
              <ul className='host-navigation'>
                <li onClick={()=> Navigate('/main-host-account')}>Dashboard</li>
                <li onClick={()=> Navigate('/host-houses')}>Your house</li>
                <li
                onClick={()=> Navigate('/add-house-host')}><Add /> house</li>
                <li onClick={()=> Navigate('/tenants-details')}>Tenants details</li>
                <li style={{ backgroundColor: '#F78513' }}>Profile</li>
                <li className='baby' onClick={()=> Navigate('/host-settings')}>Settings</li>
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
             <div className="host-profile__info-right">
                <form className="host-profile-card" encType='multipart/form-data' onSubmit={handleUpdate}>
                    <div className="host-profile-card-image-preview">
                        <div className="host-profile-card-image-preview-now">
                            <img src={preview === null ?
                            profileImage
                            :
                            preview
                            } alt="" />
                          {preview === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview(null);
                            }}><FaTimes /></span>
                            }
                            <p className='dance-title'>profile image</p>
                        </div>
                        <input type="file"
                        name="image"
                        accept="image/*"
                        onChange={(e)=> {
                          const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage(file);
                              }
                              else{
                                setImage(null);
                              }
                              }}
                        style={{ display: 'none' }}
                        ref={fileInputRef} />

                        <input type="text" placeholder="Your first name" name="profileFirst" value={profileFirst} onChange={(e)=>setProfileFirst(e.target.value)} />
                        <input type="text" placeholder="Your last name" name="profileLast" value={profileLast} onChange={(e)=>setProfileLast(e.target.value)} />
                        <input type="email" placeholder="Your email address" name="profileEmail" value={profileEmail} onChange={(e)=>setProfileEmail(e.target.value)} />
                        <input type="phone" placeholder="Your phone number" name="profilePhone" value={profilePhone} onChange={(e)=>setProfilePhone(e.target.value)} />
                        <input type="password" placeholder="Your password" name="title" value={profilePassword} onChange={(e)=>setProfilePassword(e.target.value)} />
                        <Button type="submit">submit</Button>
                    </div>
                </form>
             </div>
          </div>
  
      </div>
    )
  }

export default HostProfile