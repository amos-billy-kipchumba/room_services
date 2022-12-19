import { Button } from '@mui/material'
import React, {useState} from 'react'
import './ForgotPassword.css'
import BaseURL from './BaseUrl';
import axios from 'axios'

import swal from 'sweetalert';
function ForgotPassword() {
    const [email, setEmail] = useState('');
    const handleSubmit = async(e) => {
        e.preventDefault();

        let result = await axios.post(`${BaseURL}/api/forgot-password/${email}`);

        if(result.data.status === 200) {
            swal('success','Password reset email has been sent to your email','success');
        }

        else {
            swal({
                text: "No user with such email exist",
                icon: "warning",
                dangerMode: true,
            });
        }

        console.log("working");
        console.log(result);
    }
  return (
    <div className='forgot-password'>
        <form onSubmit={handleSubmit}>
            <label>Enter your Email to recover password</label>
            <input type='email' 
            placeholder='Email'
            value={email}
            required
            onChange={(e)=> {
                setEmail(e.target.value);
            }} />
            <Button type='submit'>submit</Button>
        </form>
    </div>
  )
}

export default ForgotPassword