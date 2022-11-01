import React, {useState, useEffect, useRef} from 'react'
import './AdminFifth.css'
import '../Customer/CustomerProfile.css';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Dashboard, Logout, MoreHoriz, People, PeopleAltOutlined, PeopleOutlineTwoTone } from '@mui/icons-material';
import BaseURL from '../BaseUrl';
import { Button } from '@mui/material';
import { FaPen, FaTimes } from 'react-icons/fa';
function AdminFifth() {
  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [imageToBe, setImageToBe] = useState(null);
  const [useful, setUseful] = useState([]);


  useEffect(()=>{
    const realThree = async () => {
      const SendId = userId;
      const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
      setImageToBe(`http://127.0.0.1:8000/users/${request.data.hostSpecific.image}`);
      setUseful(request.data.hostSpecific);

      setProfileImage(`${BaseURL}/users/${request.data.hostSpecific.image}`);
      setProfileFirst(request.data.hostSpecific.first_name);
      setProfileLast(request.data.hostSpecific.last_name);
      setProfileEmail(request.data.hostSpecific.email);
      setProfilePhone(request.data.hostSpecific.phone);
      setProfilePassword(request.data.hostSpecific.password);
    }
    realThree();
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

  const [profileImage, setProfileImage] = useState(null);
  const [profileFirst, setProfileFirst] = useState('');
  const [profileLast, setProfileLast] = useState('');
  const [profileEmail, setProfileEmail] = useState('');
  const [profilePhone, setProfilePhone] = useState('');
  const [profilePassword, setProfilePassword] = useState('');

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
            setProfileImage('');
            setProfileFirst('');
            setProfileLast('');
            setProfileEmail('');
            setProfilePhone('');
            setProfilePassword('');
            Navigate('/admin-dashboard');
        }
    });
    }


    //Scroll to the top on load
    useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
      },[]);
    //End of Scroll to the top on load

  const Navigate = useNavigate();
    return (
      <div className='admin_fifth__page'>
  
          <div className='admin_fifth__info'>
             <div className="admin_fifth__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" /></div>
                  <div>
                      <h4>{useful.first_name}</h4>
                      <p>Admin</p>
                  </div>
                  <div className='adminFirstMenuBar' onClick={handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}><MoreHoriz /> </h2></div>
              </div>
              {showMenuBar ?
              <p>Navigation</p>
              :
              null 
              }
  
              {showMenuBar ?
              <ul className='host-navigation'>
                <li
                onClick={()=> {
                    Navigate('/admin-dashboard')
                  }}><Dashboard style={{ margin: 'auto 5px' }} /> Dashboard</li>
                <li
                onClick={()=> {
                  Navigate('/admin-second')
                }}><People style={{ margin: 'auto 5px' }} /> Hosts</li>
                <li
                onClick={()=> {
                  Navigate('/admin-third')
                }}><PeopleAltOutlined style={{ margin: 'auto 5px' }} /> Admins</li>
                <li
                onClick={()=> {
                  Navigate('/admin-fourth')
                }}><PeopleOutlineTwoTone style={{ margin: 'auto 5px' }} /> Customers</li>
                <li
                style={{ backgroundColor: '#F78513' }}>Profile</li>
                <li onClick={()=> {
                  localStorage.removeItem("user-info");
                  Navigate('/');
                }}
                className="baby"><Logout style={{ margin: 'auto 5px' }} /> Logout</li>
              </ul>
              :
              null
              }
             </div>
             <div className="admin_fifth__info-right">
             <form className="customer-profile-card" encType='multipart/form-data' onSubmit={handleUpdate}>
             <div className="customer-profile-card-image-preview">
                 <div className="customer-profile-card-image-preview-now">
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

                 <input type="text"
                  placeholder="Your first name"
                  style={{ marginTop: '10px' }}
                  name="profileFirst"
                  value={profileFirst} onChange={(e)=>setProfileFirst(e.target.value)} />
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

export default AdminFifth