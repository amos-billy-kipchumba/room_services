import React, { Component } from 'react'
import './Signin.css'
import axios from 'axios'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import BaseURL from './BaseUrl'
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
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveCustomer = this.saveCustomer.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    saveCustomer = async (e) => {
        e.preventDefault();
        console.log(this.state);
        const response = await axios.post(`${this.state.base_url}/api/add-venturer`, this.state);

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
        <div className='sign__page'>

        <div className='signPage__info'>

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

            <form className="sign_form" onSubmit={this.saveCustomer}>
                <h2>Start adventure</h2>
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
                <Button variant="outlined" type="submit">Create account</Button>
            </form>

        </div>
        </div>
    )
  }
}

export default Signin
