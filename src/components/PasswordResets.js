import { Button } from '@mui/material'
import React, {useState} from 'react'
import './PasswordResets.css'
import {useSearchParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import BaseURL from './BaseUrl'
import swal from 'sweetalert';
function PasswordResets() {
    const navigation = useNavigate();
    // http://localhost:3000/password-reset?token=Jfuuhcjhq5&email=amosbillykipchumba@gmail.com&first_name=Amos&last_name=Kipchumba&phone=0743630811&host_id=93099498&user_type=3&image=EAsB42cm10xUHuWpzJjJsNlXqa0oJI3H.jpg
    const [searchParams] = useSearchParams();
    
    const token = searchParams.get('token');
    const email = searchParams.get('email');
    const first_name = searchParams.get('first_name');
    const last_name = searchParams.get('last_name');
    const host_id = searchParams.get('host_id');
    var user_type = searchParams.get('user_type');
    const image = searchParams.get('image');
    const phone = searchParams.get('phone');

    const [password, setPassword] = useState('');

    const formData = new FormData();
    formData.append('token', token);
    formData.append('email', email);
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('host_id', host_id);
    formData.append('user_type', user_type);
    formData.append('image', image);
    formData.append('phone', phone);
    formData.append('password', password);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = `${BaseURL}/api/update-forgotten-password/${email}`

        const result = await axios.post(url, formData);

        if(result.data.status === 200) {
            swal('success','Password reset is successful','success');
            localStorage.setItem("user-info", JSON.stringify(result.data))
            navigation('/admin-dashboard')
            if(user_type === 1) {
                navigation('/main-host-account')
                localStorage.setItem("user-info", JSON.stringify(result.data))
            }
            
            if(user_type === 2) {
                navigation('/')
                localStorage.setItem("user-info", JSON.stringify(result.data))
            }
            
            if(user_type === 3) {
                navigation('/admin-dashboard')
                localStorage.setItem("user-info", JSON.stringify(result.data))
            }
        }
    }
  return (
    <div className='password_resets'>
        <form onSubmit={handleSubmit}>
            <input type='password' placeholder='enter new password' value={password} onChange={(e)=>{
                setPassword(e.target.value);
            }} required />
            <Button type='submit'>Update</Button>
        </form>
    </div>
  )
}

export default PasswordResets