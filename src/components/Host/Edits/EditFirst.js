import React, {useState, useEffect, useRef} from 'react'
import './EditFirst.css'
import Add from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Button } from '@mui/material';
import {useNavigate, useParams} from 'react-router-dom';
import { FaPen, FaTimes } from 'react-icons/fa';
import BaseURL from '../../BaseUrl';
import swal from 'sweetalert';
import { MoreHoriz } from '@mui/icons-material';
function EditFirst() {

  const params = useParams();
  const paramaId = params.id;

  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [imageToBe, setImageToBe] = useState(null);
  const [realDetails, setRealDetails] = useState([]);
  const [editImage, setEditImage] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editLocation, setEditLocation] = useState('');
  const [editPrice, setEditPrice] = useState('');

  const [houseType, setHouseType] = useState('');

  const options = ["apartment", "town house", "condominium", "bungalow", "duplex", "terraced house", "single-family home", "mobile home", "modular building", "cottage", "ranch", "i-house", "gable-front", "split-level", "tower", "long house", "house barn", "courtyard house", "snout house", "octagon house", "split house", "villa", "mansion", "palace", "castle"];

  const Navigate = useNavigate();
  const fileInputRef = useRef();

  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  useEffect(()=>{
    if(image !== null)
    {
        setEditImage(image);
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

  useEffect(()=>{
    const realTwo = async () => {
      const love = await axios.get(`${BaseURL}/api/get-hello-details/${paramaId}`);
      if(love.data.status === 200){
        setRealDetails(love.data.hello);
        setEditImage(`${BaseURL}/uploads/${love.data.hello.cover}`);
        setEditTitle(love.data.hello.title);
        setEditDescription(love.data.hello.description);
        setEditLocation(love.data.hello.location);
        setEditPrice(love.data.hello.price);
        setHouseType(love.data.hello.house_type)
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
    const url = `${BaseURL}/api/update-house-details/${paramaId}`;
    const data = new FormData();
    data.append('image', editImage);
    data.append('houseTitle', editTitle);
    data.append('location', editLocation);
    data.append('description', editDescription);
    data.append('price', editPrice);
    data.append('userId', userId);
    data.append('house_type', houseType);
    axios.post(url,data).then((res) => {
      if(res.data.status === 200) {
        swal('success','house details updated','success')
        document.getElementById('updated').innerHTML = "Updated";
      }
    });
   
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

    //Scroll to the top on load
    useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load


      const handleLogout = async () => {
        const willDelete = await swal({
          title: "Are you sure?",
          text: "Are you sure that you want to logout ? if no click outside the box",
          icon: "warning",
          dangerMode: true,
      });
    
        if (willDelete) {
          localStorage.removeItem("user-info");
          Navigate('/');
      }
    }

    return (
      <div className='edit-first__page'>
  
          <div className='edit-first__info'>
             <div className="edit-first__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" /></div>
                  <div>
                      <h4>Henry Klein</h4>
                      <p>Host</p>
                  </div>
                  <div className='editFirstMenuBar' onClick={handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}> <MoreHoriz /> </h2></div>
              </div>
              {showMenuBar ?
              <p>Navigation</p>
              :
              null
              }
  
              {showMenuBar ?
              <ul className='host-navigation'>
                <li><Link to="/main-host-account" className='lilo-link'>DashBoard</Link></li>
                <li style={{ backgroundColor: '#F78513' }}><Link to="/host-houses" className='lilo-link'>Your houses</Link></li>
                <li><Link to="/add-house-host" className='lilo-link'><Add /> house</Link></li>
                <li onClick={()=> Navigate('/tenants-details')}>Tenants Details</li>
                <li onClick={()=> Navigate('/host-profile')}>Host Profile</li>
                <li onClick={()=> Navigate('/host-profile')}>Settings</li>
                <li onClick={handleLogout}
                className='baby'>Logout</li>
              </ul>
              :
              null
              }
             </div>
             <div className="edit-first__info-right">
              <form className="edit-first__info-right-block" encType='multipart/form-data' onSubmit={handleUpdate}>
                <div className="edit-first__info-right-image-container">
                  <div className="edit-first__info-right-image">
                    <img src={preview === null ?
                      editImage
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
                      <p className='dance-title'>cover image</p>
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
                </div>
                <div className="edit-first__info-right-input">
                  <label>Title</label>
                  <input type="text" name="title" value={editTitle} placeholder={realDetails.title} onChange={(e)=>setEditTitle(e.target.value)} />
                </div>

                <div className="edit-first__info-right-input">
                  <label>Description</label>
                  <textarea name="description" value={editDescription} placeholder={realDetails.description} onChange={(e)=>setEditDescription(e.target.value)}></textarea>
                </div>

                <div className="edit-first__info-right-input">
                  <label>Location</label>
                  <input type="text" name="location" value={editLocation} placeholder={realDetails.location} onChange={(e)=>setEditLocation(e.target.value)} />
                </div>

                <div className="edit-first__info-right-input">
                  <label>Price</label>
                  <input type="text" name="price" value={editPrice} placeholder={realDetails.price} onChange={(e)=>setEditPrice(e.target.value)} />
                </div>

                <div className="edit-first__info-right-input">
                  <label>House type</label>
                  <select name="house_type" value={houseType} onChange={(e)=>{
                    setHouseType(e.target.value);
                  }}>
                      <option>-- Type of house --</option>
                      {options.map((option, index)=>{
                          return(
                              <option key={index}>{option}</option>
                          );
                      })}
                  </select>
                </div>

                <div className="edit-first__info-right-buttonOne"><Button type="submit">Update (1/5) </Button></div>

                <div className="edit-first__info-right-buttonTwo">
                <Button onClick={()=> Navigate('/edit-first')} style={{ marginRight: '10px', backgroundColor: '#F78513', color: 'white' }} id="updated">Page 1</Button>
                <Button onClick={()=> Navigate(`/edit-second/${paramaId}`)} style={{ marginRight: '10px' }}>Page 2</Button>
                <Button onClick={()=> Navigate(`/edit-third/${paramaId}`)} style={{ marginRight: '10px' }}>Page 3</Button>
                <Button onClick={()=> Navigate(`/edit-four/${paramaId}`)} style={{ marginRight: '10px' }}>Page 4</Button>
                <Button onClick={()=> Navigate(`/edit-five/${paramaId}`)}>Page 5</Button>
                </div>
              </form>
             </div>
          </div>
  
      </div>
    )
  }

export default EditFirst