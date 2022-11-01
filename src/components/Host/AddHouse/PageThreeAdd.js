import React, { Component, useState, useEffect } from 'react'
import './PageThreeAdd.css'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

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
import BaseURL from '../../BaseUrl';
import swal from 'sweetalert';
import { Add, MoreHoriz } from '@mui/icons-material';
class PageThreeAdd extends Component {
    constructor() {
      super()
    
      this.state = {
         bathtub: 0,
         hair_drier: 0,
         washer: 0,
         drier: 0,
         essentials: 0,
         iron: 0,
         tv: 0,
         air_condition: 0,
         heating: 0,
         wifi: 0,
         refrigeration: 0,
         microwave: 0,
         dishes_silverware: 0,
         kitchen: 0,
         blender: 0,
         coffee_maker: 0,
         fire_extinguisher: 0,
         bread_toaster: 0,
         patio_balcony: 0,
         backyard: 0,
         outdoor_grill: 0,
         beach_essential: 0,
         pool: 0,
         parking: 0,
         long_term: 0,
         private_entrance: 0,
         user: '',
         userId: '',
         houseData: [],
         userDetails: [],
         house_id: '',
         firstName: '',
         showMenu: false,
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange1 = this.handleChange1.bind(this)
      this.handleChange2 = this.handleChange2.bind(this)
      this.handleChange3 = this.handleChange3.bind(this)
      this.handleChange4 = this.handleChange4.bind(this)
      this.handleChange5 = this.handleChange5.bind(this)
      this.handleChange6 = this.handleChange6.bind(this)
      this.handleChange7 = this.handleChange7.bind(this)
      this.handleChange8 = this.handleChange8.bind(this)
      this.handleChange9 = this.handleChange9.bind(this)
      this.handleChange10 = this.handleChange10.bind(this)
      this.handleChange11 = this.handleChange11.bind(this)
      this.handleChange12 = this.handleChange12.bind(this)
      this.handleChange13 = this.handleChange13.bind(this)
      this.handleChange14 = this.handleChange14.bind(this)
      this.handleChange15 = this.handleChange15.bind(this)
      this.handleChange16 = this.handleChange16.bind(this)
      this.handleChange17 = this.handleChange17.bind(this)
      this.handleChange18 = this.handleChange18.bind(this)
      this.handleChange19 = this.handleChange19.bind(this)
      this.handleChange20 = this.handleChange20.bind(this)
      this.handleChange21 = this.handleChange21.bind(this)
      this.handleChange22 = this.handleChange22.bind(this)
      this.handleChange23 = this.handleChange23.bind(this)
      this.handleChange24 = this.handleChange24.bind(this)
      this.handleChange25 = this.handleChange25.bind(this)
      this.handleChange26 = this.handleChange26.bind(this)
      this.handleMenuBar = this.handleMenuBar.bind(this)
    }
    
    handleChange1 = () => {
        this.setState({
            bathtub: 1,
        });
    }
    handleChange2 = () => {
        this.setState({
            hair_drier: 1,
        });
    }
    handleChange3 = () => {
        this.setState({
            washer: 1, 
        });
    }
    handleChange4 = () => {
        this.setState({
            drier: 1,
        });
    }
    handleChange5 = () => {
        this.setState({
            essentials: 1,
        });
    }
    handleChange6 = () => {
        this.setState({
            iron: 1, 
        });
    }
    handleChange7 = () => {
        this.setState({
            tv: 1,
        });
    }
    handleChange8 = () => {
        this.setState({
            air_condition: 1, 
        });
    }
    handleChange9 = () => {
        this.setState({
            heating: 1,
        });
    }
    handleChange10 = () => {
        this.setState({
            wifi: 1,
        });
    }
    handleChange11 = () => {
        this.setState({
            refrigeration: 1,
        });
    }
    handleChange12 = () => {
        this.setState({
            microwave: 1,
        });
    }
    handleChange13 = () => {
        this.setState({
            dishes_silverware: 1,
        });
    }
    handleChange14 = () => {
        this.setState({
            kitchen: 1,
        });
    }
    handleChange15 = () => {
        this.setState({
            blender: 1,
        });
    }
    handleChange16 = () => {
        this.setState({
            coffee_maker: 1,
        });
    }
    handleChange17 = () => {
        this.setState({
            fire_extinguisher: 1,
        });
    }
    handleChange18 = () => {
        this.setState({
            bread_toaster: 1,
        });
    }
    handleChange19 = () => {
        this.setState({
            patio_balcony: 1,
        });
    }
    handleChange20 = () => {
        this.setState({
            backyard: 1,
        });
    }
    handleChange21 = () => {
        this.setState({
            outdoor_grill: 1,
        });
    }
    handleChange22 = () => {
        this.setState({
            beach_essential: 1,
        });
    }
    handleChange23 = () => {
        this.setState({
            pool: 1, 
        });
    }
    handleChange24 = () => {
        this.setState({
            parking: 1,
        });
    }
    handleChange25 = () => {
        this.setState({
            long_term: 1,
        });
    }
    handleChange26 = () => {
        this.setState({
            private_entrance: 1,
        });
    }

    componentDidMount = async () => {
        const userData = JSON.parse(localStorage.getItem('user-info'));
        const userInfo = userData;

        const houseDataDetail = JSON.parse(localStorage.getItem('house_data_detail_api'));
        this.setState({
            user: userInfo.data.id,
            userId: userInfo.data.id,
            firstName: userInfo.data.first_name,
            house_id: houseDataDetail.id,
        });

        if(window.innerWidth < 1024) {
            this.setState({
                showMenu: false,
            });
          }
        
          if(window.innerWidth > 1024) {
            this.setState({
                showMenu: true,
            });
          }
    }

    handleMenuBar = () => {
        this.setState({
            showMenu: !this.state.showMenu,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const url = `${BaseURL}/api/add-seventy_five-details`;
        const data = new FormData();
        data.append('bathtub', this.state.bathtub);
        data.append('hair_drier', this.state.hair_drier);
        data.append('washer', this.state.washer);
        data.append('drier', this.state.drier);
        data.append('essentials', this.state.essentials);
        data.append('iron', this.state.iron);
        data.append('tv', this.state.tv);
        data.append('air_condition', this.state.air_condition);
        data.append('heating', this.state.heating);
        data.append('wifi', this.state.wifi);
        data.append('refrigeration', this.state.refrigeration);
        data.append('microwave', this.state.microwave);
        data.append('dishes_silverware', this.state.dishes_silverware);
        data.append('kitchen', this.state.kitchen);
        data.append('blender', this.state.blender);
        data.append('coffee_maker', this.state.coffee_maker);
        data.append('fire_extinguisher', this.state.fire_extinguisher);
        data.append('bread_toaster', this.state.bread_toaster);
        data.append('patio_balcony', this.state.patio_balcony);
        data.append('backyard', this.state.backyard);
        data.append('outdoor_grill', this.state.outdoor_grill);
        data.append('beach_essential', this.state.beach_essential);
        data.append('pool', this.state.pool);
        data.append('parking', this.state.parking);
        data.append('long_term', this.state.long_term);
        data.append('private_entrance', this.state.private_entrance);
        data.append('userId', this.state.user);
        data.append('house_id', this.state.house_id);

        axios.post(url,data).then(res => {
            if(res.data.status === 200){
            swal('success','House details added! You are remaining with 25% to completion','success')
            this.setState({
                bathtub: '',
                hair_drier: '',
                washer: '',
                 drier: '',
                essentials: '',
                iron: '',
                tv: '',
                air_condition: '',
                heating: '',
                wifi: '',
                refrigerator: '',
                microwave: '',
                dishes_silverware: '',
                kitchen: '',
                blender: '',
                coffee_maker: '',
                fire_extinguisher: '',
                bread_toaster: '',
                patio_balcony: '',
                backyard: '',
                outdoor_grill: '',
                beach_essential: '',
                pool: '',
                parking: '',
                long_term: '',
                private_entrance: '',
            });
            this.props.navigation('/add-house-host-page-four');
            }
        });
    }

    render() {
  return (
    <div className='page-three-add__page'>

        <div className='page-three-add__info'>
           <div className="page-three-add__info-left">
            <div className='incase-you-know'>
                <div className="host-image"><img src={this.props.hostMainImage} alt="" /></div>
                <div>
                    <h4>{this.state.firstName}</h4>
                    <p>Host</p>
                </div>
                <div className='addThreeMenuBar' onClick={this.handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}><MoreHoriz /></h2></div>
            </div>
            {this.state.showMenu ?
            <p>Navigation</p>
            :
            null
            }

            {this.state.showMenu ?
            <ul className='host-navigation'>
                <li><Link to="/main-host-account" className='lilo-link'>DashBoard</Link></li>
                <li style={{ backgroundColor: '#F78513', marginBottom: '10px' }}><Add /> Room</li>
            </ul>
            :
            null
            }
           </div>
           <div className="page-three-add__info-right">
                <div className="fill-up-detail-header">
                    <p>Add your house/room details:</p> <p><span><strong>75%</strong></span> to completion</p>
                </div>
                <div className='what-the-place-offers'>
                    <p>What the place offer [select if it exists]</p>
                </div>
                
                <form className='fill-up-detail-form-three' onSubmit={this.handleSubmit}>
                    <div className='page-three-form-container'>
                        <div className='page-three-form-container-one'>
                            <h4><strong>Bedroom</strong></h4>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input" name="bathtub" value={this.state.bathtub} onChange={this.handleChange1} /></div> <div className='icon-name-value-two'><span>Bathtub</span></div> <div className='icon-name-value-three'><span><FaBath /></span></div>
                            </div>
                            <div className='icon-name-value' style={{ borderBottom: '1px solid antiquewhite' }}>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input1" name="hair_drier" value={this.state.hair_drier} onChange={this.handleChange2} /></div> <div className='icon-name-value-two'><span>Hair Drier</span></div> <div className='icon-name-value-three'><span><img width="20px" src={Drier} alt="" /></span></div>
                            </div>
                            <h4><strong>Bedroom & Laundry</strong></h4>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input2" name="washer" value={this.state.washer} onChange={this.handleChange3} /></div> <div className='icon-name-value-two'><span>Washer</span></div> <div className='icon-name-value-three'><span><LocalLaundryServiceIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input3" name="drier" value={this.state.drier} onChange={this.handleChange4} /></div> <div className='icon-name-value-two'><span>Drier</span></div> <div className='icon-name-value-three'><span><DryCleaningIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input4" name="essentials" value={this.state.essentials} onChange={this.handleChange5} /></div> <div className='icon-name-value-two'><span>Essentials</span></div> <div className='icon-name-value-three'><span><FaToiletPaper /></span></div>
                            </div>
                            <div className='icon-name-value' style={{ borderBottom: '1px solid antiquewhite' }}>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input5" name="iron" value={this.state.iron} onChange={this.handleChange6} /></div> <div className='icon-name-value-two'><span>Iron</span></div> <div className='icon-name-value-three'><span><IronIcon /></span></div>
                            </div>
                            <h4><strong>Entertainment</strong></h4>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input6" name="tv" value={this.state.tv} onChange={this.handleChange7} /></div> <div className='icon-name-value-two'><span>TV</span></div> <div className='icon-name-value-three'><span><FaTv /></span></div>
                            </div>
                        </div>
                        <div className='page-three-form-container-two'>
                            <h4><strong>Heating & Cooling</strong></h4>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input7" name="air_condition" value={this.state.air_condition} onChange={this.handleChange8} /></div> <div className='icon-name-value-two'><span>Air condition</span></div> <div className='icon-name-value-three'><span><AcUnitIcon /></span></div>
                            </div>
                            <div className='icon-name-value' style={{ borderBottom: '1px solid antiquewhite' }}>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input8" name="heating" value={this.state.heating} onChange={this.handleChange9} /></div> <div className='icon-name-value-two'><span>Heating</span></div> <div className='icon-name-value-three'><span><FaTemperatureHigh /></span></div>
                            </div>
                            <h4><strong>Internet & Office</strong></h4>
                            <div className='icon-name-value' style={{ borderBottom: '1px solid antiquewhite' }}>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input9" name="wifi" value={this.state.wifi} onChange={this.handleChange10} /></div> <div className='icon-name-value-two'><span>wifi</span></div> <div className='icon-name-value-three'><span><FaWifi /></span></div>
                            </div>
                        </div>
                        <div className='page-three-form-container-three'>
                            <h4><strong>Kitchen & Dining</strong></h4>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input10" name="refrigeration" value={this.state.refrigeration} onChange={this.handleChange11} /></div> <div className='icon-name-value-two'><span>Refrigerator</span></div> <div className='icon-name-value-three'><span><KitchenIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input11" name="microwave" value={this.state.microwave} onChange={this.handleChange12} /></div> <div className='icon-name-value-two'><span>Microwave</span></div> <div className='icon-name-value-three'><span><MicrowaveIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input12" name="dishes_silverware" value={this.state.dishes_silverware} onChange={this.handleChange13} /></div> <div className='icon-name-value-two'><span>Dishes and Silverware</span></div> <div className='icon-name-value-three'><span><RiceBowlIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input13" name="kitchen" value={this.state.kitchen} onChange={this.handleChange14} /></div> <div className='icon-name-value-two'><span>Kitchen</span></div> <div className='icon-name-value-three'><span><LocalDiningIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input14" name="blender" value={this.state.blender} onChange={this.handleChange15} /></div> <div className='icon-name-value-two'><span>Blender</span></div> <div className='icon-name-value-three'><span><BlenderIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input15" name="coffee_maker" value={this.state.coffee_maker} onChange={this.handleChange16} /></div> <div className='icon-name-value-two'><span>Coffee maker</span></div> <div className='icon-name-value-three'><span><CoffeeMakerIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input16" name="fire_extinguisher" value={this.state.fire_extinguisher} onChange={this.handleChange17} /></div> <div className='icon-name-value-two'><span>Fire extinguisher</span></div> <div className='icon-name-value-three'><span><FireExtinguisherIcon /></span></div>
                            </div>
                            <div className='icon-name-value' style={{ borderBottom: '1px solid antiquewhite' }}>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input17" name="bread_toaster" value={this.state.bread_toaster} onChange={this.handleChange18} /></div> <div className='icon-name-value-two'><span>Bread Toaster</span></div> <div className='icon-name-value-three'><span><FaBreadSlice /></span></div>
                            </div>
                            <h4><strong>Outdoor</strong></h4>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input18" name="patio_balcony" value={this.state.patio_balcony} onChange={this.handleChange19} /></div> <div className='icon-name-value-two'><span>Patio or balcony</span></div> <div className='icon-name-value-three'><span><BalconyIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input19" name="backyard" value={this.state.backyard} onChange={this.handleChange20} /></div> <div className='icon-name-value-two'><span>Backyard</span></div> <div className='icon-name-value-three'><span><YardIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input20" name="outdoor_grill" value={this.state.outdoor_grill} onChange={this.handleChange21} /></div> <div className='icon-name-value-two'><span>Outdoor grill</span></div> <div className='icon-name-value-three'><span><OutdoorGrillIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input21" name="beach_essential" value={this.state.beach_essential} onChange={this.handleChange22} /></div> <div className='icon-name-value-two'><span>Beach essentials</span></div> <div className='icon-name-value-three'><span><BeachAccessIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input22" name="pool" value={this.state.pool} onChange={this.handleChange23} /></div> <div className='icon-name-value-two'><span>Pool</span></div> <div className='icon-name-value-three'><span><PoolIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input23" name="parking" value={this.state.parking} onChange={this.handleChange24} /></div> <div className='icon-name-value-two'><span>Parking</span></div> <div className='icon-name-value-three'><span><LocalParkingIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input24" name="long_term" value={this.state.long_term} onChange={this.handleChange25} /></div> <div className='icon-name-value-two'><span>Long term stay allowed</span></div> <div className='icon-name-value-three'><span><CalendarMonthIcon /></span></div>
                            </div>
                            <div className='icon-name-value'>
                                <div className='icon-name-value-one'><input type="checkbox" id="back_input25" name="private_entrance" value={this.state.private_entrance} onChange={this.handleChange26} /></div> <div className='icon-name-value-two'><span>Private entrance</span></div> <div className='icon-name-value-three'><span><NoMeetingRoomIcon /></span></div>
                            </div>
                        </div>
                    </div>
                    <Button type="submit" id="submit">Submit</Button>
                </form>
                <Button onClick={()=>{
                    this.props.navigation(`/back-second/${this.state.house_id}`);
                }}>Back</Button>
                <Button id='back_id'
                onClick={()=>{
                    this.props.navigation('/add-house-host-page-four');
                }}>next</Button>
           </div>
        </div>

    </div>
  )
}
}

export function PageThreeAddWithRouter(props) {
    const navigation = useNavigate();
    const userData = JSON.parse(localStorage.getItem('user-info'));
    const [userId] = useState(userData.data.id);
    const [hostMainImage, setHostMainImage] = useState();

    useEffect(()=>{
        const getReal = async () => {
            const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${userId}`);
            setHostMainImage(`${BaseURL}/users/${request.data.hostSpecific.image}`);
        }
        getReal();
    },[userId]);


    const houseData = JSON.parse(localStorage.getItem('house_data_detail_api'));
    const [houseId] = useState(houseData.id);

    useEffect(()=>{
        const getHouseFive = async () => {
            const request = await axios.get(`${BaseURL}/api/get-stars-details/${houseId}`);
            if(request.data.status === 404) {
                document.getElementById('back_id').style.display = 'none';
            }

            if(request.data.status === 200) {
                document.getElementById('back_input').disabled = true;
                document.getElementById('back_input1').disabled = true;
                document.getElementById('back_input2').disabled = true;
                document.getElementById('back_input3').disabled = true;
                document.getElementById('back_input4').disabled = true;
                document.getElementById('back_input5').disabled = true;
                document.getElementById('back_input6').disabled = true;
                document.getElementById('back_input7').disabled = true;
                document.getElementById('back_input8').disabled = true;
                document.getElementById('back_input9').disabled = true;
                document.getElementById('back_input10').disabled = true;
                document.getElementById('back_input11').disabled = true;
                document.getElementById('back_input12').disabled = true;
                document.getElementById('back_input13').disabled = true;
                document.getElementById('back_input14').disabled = true;
                document.getElementById('back_input15').disabled = true;
                document.getElementById('back_input16').disabled = true;
                document.getElementById('back_input17').disabled = true;
                document.getElementById('back_input18').disabled = true;
                document.getElementById('back_input19').disabled = true;
                document.getElementById('back_input20').disabled = true;
                document.getElementById('back_input21').disabled = true;
                document.getElementById('back_input22').disabled = true;
                document.getElementById('back_input23').disabled = true;
                document.getElementById('back_input24').disabled = true;
                document.getElementById('back_input25').disabled = true;
                document.getElementById('submit').disabled = true;
            }
        }
        getHouseFive();
    },[houseId]);

    //Scroll to the top on load
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load
    return <PageThreeAdd {...props} navigation={navigation} hostMainImage={hostMainImage} />;
  }

export default PageThreeAdd;