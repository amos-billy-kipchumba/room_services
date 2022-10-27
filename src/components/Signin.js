import React, { Component } from 'react'
import './Signin.css'
import axios from 'axios'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import BaseURL from './BaseUrl'
import swal from 'sweetalert';
class Signin extends Component {
    constructor() {
        super() 
        this.state = {
            first_name: '',
            last_name: '',
            email:'',
            phone: '',
            password: '',
            error_list: [],
            base_url: BaseURL,
            image: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveCustomer = this.saveCustomer.bind(this)
        this.handleImage = this.handleImage.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleImage = (e) => {
        this.setState({
            image: e.target.files[0],
        })
    }

    saveCustomer = async (e) => {
        e.preventDefault();
        document.getElementById('submit').innerHTML = "creating";
        const url = `${this.state.base_url}/api/add-venturer`;
        const data = new FormData();
        data.append('first_name', this.state.first_name);
        data.append('last_name', this.state.last_name);
        data.append('email', this.state.email);
        data.append('phone', this.state.phone);
        data.append('password', this.state.password);
        data.append('image', this.state.image);

        axios.post(url,data).then(res => {
            if(res.data.status === 200)
            {
           document.getElementById('submit').innerHTML = "created";
           swal('success','account created successfully you can now proceed to login','success')
            this.setState({
                first_name: '',
                last_name: '',
                email:'',
                phone: '',
                password: '',
                error_list: [],
                base_url: BaseURL,
                image: '',
            });
            }
            else
            {
            this.setState({
                error_list: res.data.validate_err,
            });
            }
        })
    }

    //Scroll to the top on load
    componentDidMount() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
    //End of Scroll to the top on load
  render() {
    return (
        <div className='sign__page'>

        <div className='signPage__info'>

            <form className="sign_form" onSubmit={this.saveCustomer}>
                <h2>Start adventure</h2>
                <label>Select <strong>Profile</strong> image</label>
                <input type="file" name="image" value={this.state.userImage} onChange={this.handleImage} />
                <input type="text" name="first_name" placeholder="Enter your first name" onChange={this.handleChange} value={this.state.first_name} />
                <span className='validate-span'>{this.state.error_list.first_name}</span>
                <input type="text" name="last_name" placeholder="Enter your last name" onChange={this.handleChange} value={this.state.last_name} />
                <span className='validate-span'>{this.state.error_list.last_name}</span>
                <input type="email" name="email" placeholder="Enter your Email" onChange={this.handleChange} value={this.state.email} />
                <span className='validate-span'>{this.state.error_list.email}</span>
                <input type="text" name="phone" placeholder="Enter your Phone Number" onChange={this.handleChange} value={this.state.phone} />
                <span className='validate-span'>{this.state.error_list.phone}</span>
                <input type="password" name="password" placeholder="Enter your password" onChange={this.handleChange} value={this.state.password} />
                <span className='validate-span'>{this.state.error_list.password}</span>

                <p className="sign_span">Have an account? <span><Link to="/login-user" className='sin-link'>Login</Link></span></p>
                <Button variant="outlined" type="submit" id="submit">Create account</Button>
            </form>

        </div>
        </div>
    )
  }
}

export default Signin
