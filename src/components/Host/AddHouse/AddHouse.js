import React, {Component, useEffect} from 'react'
import './AddHouse.css'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { Add } from '@mui/icons-material';
import BaseURL from '../../BaseUrl';
import swal from 'sweetalert';
class AddHouse extends Component {
    constructor() {
      super()
      this.state = {
        options: ["apartment", "town house", "condominium", "bungalow", "duplex", "terraced house", "single-family home", "mobile home", "modular building", "cottage", "ranch", "i-house", "gable-front", "split-level", "tower", "long house", "house barn", "courtyard house", "snout house", "octagon house", "split house", "villa", "mansion", "palace", "castle"],
        image: '',
        houseTitle: '',
        location: '',
        description: '',
        price: '',
        userId: null,
        userDetails: [],
        hostImage: null,
        house_type: '',
        something: [],
        firstName: '',
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleImage = this.handleImage.bind(this)
      this.onOptionChangeHandler = this.onOptionChangeHandler.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleImage(e) {
        this.setState({
            image: e.target.files[0],
        })
    }

    onOptionChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    componentDidMount = async () => {
        const userData = JSON.parse(localStorage.getItem('user-info'));
        const userInfo = userData;
        this.setState({
            userId: userInfo.data.id,
            firstName:userInfo.data.first_name,
        });

       const data = await axios.get(`${BaseURL}/api/get-house-details`);


        const SendId = this.state.userId;
        const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
        this.setState({
            userDetails: request.data.hostSpecific,
            hostImage: `${BaseURL}/users/${request.data.hostSpecific.image}`,
            something: data
        });
    }

   

    handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${BaseURL}/api/add-house-details`;
        const data = new FormData();
        data.append('image', this.state.image);
        data.append('houseTitle', this.state.houseTitle);
        data.append('location', this.state.location);
        data.append('description', this.state.description);
        data.append('price', this.state.price);
        data.append('userId', this.state.userId);
        data.append('house_type', this.state.house_type);


        axios.post(url,data).then(res => {
            this.setState({
                image: '',
                houseTitle: '',
                location: '',
                description: '',
                price: '',
                userId: null,
                house_type: '',
            });
            localStorage.setItem("house_data_detail_api", JSON.stringify(res.data.house_details_data));
            document.getElementById('submit').disabled = "true";
            document.getElementById('submit').innerHTML = "posted";
            swal('success','House details added! You are remaining with 75% to completion','success');
            this.props.navigation('/add-house-host-page-two');
        })
    }
    
    render() {
        return (
            <div className='add-house-host__page'>
        
                <div className='add-house-host__info'>
                   <div className="add-house-host__info-left">
                    <div className='incase-you-know'>
                        <div className="host-image"><img src={this.state.hostImage} alt="" /></div>
                        <div>
                            <h4>{this.state.firstName}</h4>
                            <p>Host</p>
                        </div>
                        <div><h2 style={{ display: 'flex', alignItems: 'center' }}>...</h2></div>
                    </div>
                    <p>Navigation</p>
        
                    <ul className='host-navigation'>
                        <li><Link to="/main-host-account" className='lilo-link'>DashBoard</Link></li>
                        <li><Link to="/host-houses" className='lilo-link'>Your houses</Link></li>
                        <li style={{ backgroundColor: '#ff7779' }}><Link to="/add-house-host" className='lilo-link'><Add /> house</Link></li>
                        <li><Link to="/tenants-details" className='lilo-link'>Tenants Details</Link></li>
                        <li><Link to="/host-profile" className='lilo-link'>Host Profile</Link></li>
                        <li className='baby' onClick={()=>{
                            this.props.navigation('/host-settings');
                        }}><Link to="/add-house-host" className='lilo-link'>Settings</Link></li>
                    </ul>
                   </div>
                   <div className="add-house-host__info-right">
                        <div className="fill-up-detail-header"><p>Add your house details:</p> <p><span><strong>25%</strong></span> of completion</p></div>
                        <form className="fill-up-detail-form" encType='multipart/form-data' onSubmit={this.handleSubmit}>
                            <label>Enter house cover image</label>
                            <input type="file" name="image" value={this.state.houseCoverImage} onChange={this.handleImage} />
                            <input type="text" name="houseTitle" value={this.state.houseTitle} placeholder="Enter the title of the house" onChange={this.handleChange} />
                            <input type="text" name="location" value={this.state.location} placeholder="Enter the location of the house" onChange={this.handleChange} />
                            <select name="house_type" value={this.state.house_type} onChange={this.onOptionChangeHandler}>
                                <option>-- Type of house --</option>
                                {this.state.options.map((option, index)=>{
                                    return(
                                        <option key={index}>{option}</option>
                                    );
                                })}
                            </select>
                            <textarea name="description" value={this.state.description} placeholder="Enter the description" onChange={this.handleChange}></textarea>
                            <input type="number" name="price" value={this.state.price} placeholder="Enter the price in $ /night" onChange={this.handleChange} />
                            <Button type="submit" id="submit">Submit</Button>
                        </form>
                   </div>
                </div>
        
            </div>
          )
    }
}

export function AddHouseWithRouter(props) {
    const navigation = useNavigate();
    //Scroll to the top on load
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load
    return <AddHouse {...props} navigation={navigation} />;
  }

export default AddHouse;