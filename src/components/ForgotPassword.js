import { Button } from '@mui/material'
import React, {useState} from 'react'
import './ForgotPassword.css'
function ForgotPassword() {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className='forgot-password'>
        <form onSubmit={handleSubmit}>
            <label>Enter your Email to recover password</label>
            <input type='email' 
            placeholder='Email'
            value={email}
            onChange={(e)=> {
                setEmail(e.target.value);
            }} />
            <Button>submit</Button>
        </form>
    </div>
  )
}

export default ForgotPassword