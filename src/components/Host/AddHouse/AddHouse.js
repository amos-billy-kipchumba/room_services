import React, {Component} from 'react'
import './AddHouse.css'
import HostImage from '../../Images/people/face20.jpg'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import axios from 'axios'
class AddHouse extends Component {
    constructor() {
      super()
      this.state = {
        image: '',
        houseTitle: '',
        location: '',
        description: '',
        price: '',
        userId: null,
        houseData: [],
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleImage = this.handleImage.bind(this)
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

    componentDidMount = async () => {
        const userData = JSON.parse(localStorage.getItem('user-info'));
        const userInfo = userData;
        this.setState({
            userId: userInfo.data.id,
        });

       const data = await axios.get('http://127.0.0.1:8000/api/get-house-details');
       console.log(data.data);
       this.setState({
        houseData: data.data.house_details,
       });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        const url = "http://127.0.0.1:8000/api/add-house-details";
        const data = new FormData();
        data.append('image', this.state.image);
        data.append('houseTitle', this.state.houseTitle);
        data.append('location', this.state.location);
        data.append('description', this.state.description);
        data.append('price', this.state.price);
        data.append('userId', this.state.userId);

        axios.post(url,data).then(res => {
            console.log(res);
            this.setState({
                image: '',
                houseTitle: '',
                location: '',
                description: '',
                price: '',
                userId: null,
            });
        })
    }
    render() {
        return (
            <div className='add-house-host__page'>
        
                <div className='add-house-host__info'>
                   <div className="add-house-host__info-left">
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
                        {this.state.houseData ?
                            <>
                        <li><Link to="/main-host-account" className='lilo-link'>DashBoard</Link></li>
                        <li>Your House or Room</li>
                        <li>Tenants Details</li>
                        <li>Host Profile</li>
                            </>
                         :
                         <>
                            <li><Link to="/main-host-account" className='lilo-link'>DashBoard</Link></li>
                            <li style={{ backgroundColor: '#ff7779' }}><Add /> Add House or Room</li>
                            <li>Your House or Room</li>
                            <li>Tenants Details</li>
                            <li>Host Profile</li>
                         </>
                        }
                    </ul>
                   </div>
                   <div className="add-house-host__info-right">
                        <div className="fill-up-detail-header"><p>Add your house/room details:</p> <p><span><strong>25%</strong></span> to completion</p></div>
                        <form className="fill-up-detail-form" encType='multipart/form-data' onSubmit={this.handleSubmit}>
                            <label>Enter house cover image</label>
                            <input type="file" name="image" value={this.state.houseCoverImage} onChange={this.handleImage} />
                            <input type="text" name="houseTitle" value={this.state.houseTitle} placeholder="Enter the title of the house/room" onChange={this.handleChange} />
                            <input type="text" name="location" value={this.state.location} placeholder="Enter the location of the house/room" onChange={this.handleChange} />
                            <textarea name="description" value={this.state.description} placeholder="Enter the description" onChange={this.handleChange}></textarea>
                            <input type="text" name="price" value={this.state.price} placeholder="Enter the price/night of the house/room" onChange={this.handleChange} />
                            <Button type="submit">Submit</Button>
                        </form>
                   </div>
                </div>
        
            </div>
          )
    }
}

export default AddHouse