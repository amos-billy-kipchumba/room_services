import React from 'react'
import './PageThreeAdd.css'
import HostImage from '../../Images/people/face20.jpg'
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';

import { FaBath, FaToiletPaper, FaTv, FaTemperatureHigh, FaWifi, FaBreadSlice } from "react-icons/fa";
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import IronIcon from '@mui/icons-material/Iron';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import BlenderIcon from '@mui/icons-material/Blender';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import BalconyIcon from '@mui/icons-material/Balcony';
import YardIcon from '@mui/icons-material/Yard';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import PoolIcon from '@mui/icons-material/Pool';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Drier from '../../Images/drier.jpg'
import KitchenIcon from '@mui/icons-material/Kitchen';
import Add from '@mui/icons-material/Add';
function PageThreeAdd() {
    const navigate = useNavigate()
  return (
    <div className='page-three-add__page'>

        <div className='page-three-add__info'>
           <div className="page-three-add__info-left">
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
                <li onClick={()=> navigate('/main-host-account')}>DashBoard</li>
                <li style={{ backgroundColor: '#ff7779' }}><Add /> Add House or Room</li>
                <li>Your House or Room</li>
                <li>Tenants Details</li>
                <li>Host Profile</li>
            </ul>
           </div>
           <div className="page-three-add__info-right">
                <div className="fill-up-detail-header">
                    <p>Add your house/room details:</p> <p><span><strong>75%</strong></span> to completion</p>
                </div>
                <div className='what-the-place-offers'>
                    <p>What the place offer</p>
                </div>
                
                <form className='fill-up-detail-form-three'>
                    <div className='page-three-form-container'>
                        <div className='page-three-form-container-one'>
                            <h4><strong>Bedroom</strong> [select if it exists]</h4>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="bathtub" /></div> <div className='icon-name-value-two'><span>Bathtub</span></div> <div className='icon-name-value-three'><span><FaBath /></span></div>
                            </div>
                            <div className='icon-name-value' style={{ borderBottom: '1px solid antiquewhite' }}>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Hair Drier</span></div> <div className='icon-name-value-three'><span><img width="20px" src={Drier} alt="" /></span></div>
                            </div>
                            <h4><strong>Bedroom & Laundry</strong></h4>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Washer</span></div> <div className='icon-name-value-three'><span><LocalLaundryServiceIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Drier</span></div> <div className='icon-name-value-three'><span><DryCleaningIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Essentials</span></div> <div className='icon-name-value-three'><span><FaToiletPaper /></span></div>
                            </div>
                            <div className='icon-name-value' style={{ borderBottom: '1px solid antiquewhite' }}>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Iron</span></div> <div className='icon-name-value-three'><span><IronIcon /></span></div>
                            </div>
                            <h4><strong>Entertainment</strong></h4>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>TV</span></div> <div className='icon-name-value-three'><span><FaTv /></span></div>
                            </div>
                        </div>
                        <div className='page-three-form-container-two'>
                            <h4><strong>Heating & Cooling</strong></h4>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Air condition</span></div> <div className='icon-name-value-three'><span><AcUnitIcon /></span></div>
                            </div>
                            <div className='icon-name-value' style={{ borderBottom: '1px solid antiquewhite' }}>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Heating</span></div> <div className='icon-name-value-three'><span><FaTemperatureHigh /></span></div>
                            </div>
                            <h4><strong>Internet & Office</strong></h4>
                            <div className='icon-name-value' style={{ borderBottom: '1px solid antiquewhite' }}>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>wifi</span></div> <div className='icon-name-value-three'><span><FaWifi /></span></div>
                            </div>
                        </div>
                        <div className='page-three-form-container-three'>
                            <h4><strong>Kitchen & Dining</strong></h4>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Refrigerator</span></div> <div className='icon-name-value-three'><span><KitchenIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Microwave</span></div> <div className='icon-name-value-three'><span><MicrowaveIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Dishes and Silverware</span></div> <div className='icon-name-value-three'><span><RiceBowlIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Kitchen</span></div> <div className='icon-name-value-three'><span><LocalDiningIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Blender</span></div> <div className='icon-name-value-three'><span><BlenderIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Coffee maker</span></div> <div className='icon-name-value-three'><span><CoffeeMakerIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Fire extinguisher</span></div> <div className='icon-name-value-three'><span><FireExtinguisherIcon /></span></div>
                            </div>
                            <div className='icon-name-value' style={{ borderBottom: '1px solid antiquewhite' }}>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Bread Toaster</span></div> <div className='icon-name-value-three'><span><FaBreadSlice /></span></div>
                            </div>
                            <h4><strong>Outdoor</strong></h4>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Patio or balcony</span></div> <div className='icon-name-value-three'><span><BalconyIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Backyard</span></div> <div className='icon-name-value-three'><span><YardIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Outdoor grill</span></div> <div className='icon-name-value-three'><span><OutdoorGrillIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Beach essentials</span></div> <div className='icon-name-value-three'><span><BeachAccessIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Pool</span></div> <div className='icon-name-value-three'><span><PoolIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Parking</span></div> <div className='icon-name-value-three'><span><LocalParkingIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Long term stay allowed</span></div> <div className='icon-name-value-three'><span><CalendarMonthIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="radio" value="hair-drier" /></div> <div className='icon-name-value-two'><span>Private entrance</span></div> <div className='icon-name-value-three'><span><NoMeetingRoomIcon /></span></div>
                            </div>
                        </div>
                    </div>
                    <Button type="submit" onClick={()=> navigate('/add-house-host-page-four')}>Submit</Button>
                </form>
                <Button onClick={()=> navigate('/add-house-host-page-two')}>Back</Button>
           </div>
        </div>

    </div>
  )
}

export default PageThreeAdd