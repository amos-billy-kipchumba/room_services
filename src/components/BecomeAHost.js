import React, { Component } from 'react'
import axios from 'axios'
import './BecomeAHost.css'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import BaseURL from './BaseUrl'
class BecomeAHost extends Component {
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
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveHost = this.saveHost.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    saveHost = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${this.state.base_url}/api/add-host`, this.state);

        if(response.data.status === 200)
        {
            console.log(response.data.message);
            this.setState({
                first_name: '',
                last_name: '',
                email:'',
                phone: '',
                password: '',
            });
        }
        else
        {
          this.setState({
            error_list: response.data.validate_err,
          });
        }
    }
  render() {
    
    return (
        <div className='become__page'>

        <div className='becomePage__info'>

            <Button variant="outlined">
                Type of place
            </Button>

            <Button variant="outlined">
                Price
            </Button>

            <Button variant="outlined">
                Rooms and beds
            </Button>

            <Button variant="outlined">
                More filters
            </Button>


        </div>

        <form className='form-host' onSubmit={this.saveHost}>
            <h2>Become a host</h2>
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

            <p className="become_span">Have an account? <span><Link to="/login-user" className='login-link'>Login</Link></span></p>
            <Button variant="outlined" type="submit">Create account</Button>
        </form>

    </div>
    )
  }
}

export default BecomeAHost
