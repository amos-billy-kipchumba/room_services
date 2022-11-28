import React, {Component, useState, useEffect} from 'react'
import './PageTwoAdd.css'
import Button from '@mui/material/Button';
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
import BaseURL from '../../BaseUrl';
import swal from 'sweetalert';
import { Add, MoreHoriz } from '@mui/icons-material';
class PageTwoAdd extends Component {
    constructor() {
      super()
    
      this.state = {
         guests: '',
         bedrooms: '',
         beds: '',
         bathtubs: '',
         user: '',
         userId: '',
         house_id: '',
         firstName: '',
         showMenu: false,
      }
      
      this.handleChange = this.handleChange.bind(this)
      this.SubmitForm = this.SubmitForm.bind(this)
      this.handleMenuBar = this.handleMenuBar.bind(this)
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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    SubmitForm = (e) => {

        e.preventDefault();
        document.getElementById('submit').innerHTML = "sending"
        document.getElementById('submit').disabled = true;
        const url = `${BaseURL}/api/add-fifty-details`;
        const data = new FormData();
        data.append('guests', this.state.guests);
        data.append('bedrooms', this.state.bedrooms);
        data.append('beds', this.state.beds);
        data.append('bathtubs', this.state.bathtubs);
        data.append('userId', this.state.user);
        data.append('house_id', this.state.house_id);

        axios.post(url,data).then(res => {
            document.getElementById('submit').innerHTML = "sending"
            if(res.data.status === 200) {
                swal('success','House details added! You are remaining with 60% to completion','success')
            this.setState({
                guests: '',
                bedrooms: '',
                beds: '',
                bathtubs: '',
                user: '',
            });
            this.props.navigation('/add-house-host-page-three');
            }
        })
    }
    

    render() {
        return (
            <div className='page-two-add__page'>
        
                <div className='page-two-add__info'>
                   <div className="page-two-add__info-left">
                    <div className='incase-you-know'>
                        <div className="host-image"><img src={this.props.hostMainImage} alt="" /></div>
                        <div>
                            <h4>{this.state.firstName}</h4>
                            <p>Host</p>
                        </div>
                        <div className='addTwoMenuBar' onClick={this.handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}><MoreHoriz /></h2></div>
                    </div>

                    {this.state.showMenu ? 
                    <p>Navigation</p>
                    :
                    null
                    }
        
                    {this.state.showMenu ? 
                    <ul className='host-navigation'>
                        <li><Link to="/main-host-account" className='lilo-link'>DashBoard</Link></li>
                        <li style={{ backgroundColor: '#F78513', marginBottom: '10px' }}><Add /> house</li>
                    </ul>
                    :
                    null
                    }
                   </div>
                   <div className="page-two-add__info-right">
                        <div className="fill-up-detail-header"><p>Add your house/room details:</p> <p><span><strong>40%</strong></span> of completion</p></div>
                        <form className="fill-up-detail-form page-two" onSubmit={this.SubmitForm}>
                            <input type="number" min="1" value={this.state.guests} name="guests" onChange={this.handleChange} placeholder="Enter the max-number of Guests" id="back_input" />
                            <input type="number" min="0" value={this.state.bedrooms} name="bedrooms" onChange={this.handleChange} placeholder="Enter the number of bedrooms" id="back_input1" />
                            <input type="number" min="0" value={this.state.beds} name="beds" onChange={this.handleChange} placeholder="Enter the number of beds" id="back_input2" />
                            <input type="number" min="0" value={this.state.bathtubs} name="bathtubs" onChange={this.handleChange} placeholder="Enter the number of bathrooms/bathtubs" id="back_input3" />
                            <Button type="submit" id="submit">Submit</Button>
                        </form>
        
                        <Button onClick={()=>{
                            this.props.navigation(`/back-first/${this.state.house_id}`);
                        }}>Back</Button>

                        <Button id="back_id"
                        onClick={()=>{
                            this.props.navigation('/add-house-host-page-three');
                        }}>Next</Button>
                   </div>
                </div>
        
            </div>
          )
    }
}

export function PageTwoAddWithRouter(props) {
    const navigation = useNavigate();
    const userData = JSON.parse(localStorage.getItem('user-info'));
    const [userId] = useState(userData.data.id);
    const houseData = JSON.parse(localStorage.getItem('house_data_detail_api'));
    const [houseId] = useState(houseData.id);
    const [hostMainImage, setHostMainImage] = useState();

    useEffect(()=>{
        const getReal = async () => {
            const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${userId}`);
            setHostMainImage(`${BaseURL}/users/${request.data.hostSpecific.image}`);
        }
        getReal();
    },[userId]);

    useEffect(()=>{
        const getHouseFifty = async () => {
            const request = await axios.get(`${BaseURL}/api/get-moon-details/${houseId}`);
            if(request.data.status === 404) {
                document.getElementById('back_id').style.display = 'none';
            }

            if(request.data.status === 200) {
                document.getElementById('back_input').disabled = true;
                document.getElementById('back_input1').disabled = true;
                document.getElementById('back_input2').disabled = true;
                document.getElementById('back_input3').disabled = true;
                document.getElementById('submit').disabled = true;
            }
        }
        getHouseFifty();
    },[houseId]);

    //Scroll to the top on load
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load
    return <PageTwoAdd {...props} navigation={navigation} hostMainImage={hostMainImage} />;
  }

export default PageTwoAdd