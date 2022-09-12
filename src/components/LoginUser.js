import React, {useState, useEffect} from 'react'
import './LoginUser.css'
import Button from '@mui/material/Button';
import BaseURL from './BaseUrl';
import {useNavigate} from 'react-router-dom'
function LoginUser () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mommaError, setMommaError] = useState("");
    const [error_list_email, setError_list_email] = useState([]);
    const [error_list_password, setError_list_password] = useState([]);
    const [base_url, setBase_url] = useState("");

    const navigation = useNavigate();
   
    useEffect(()=>{
        setBase_url(BaseURL);
    },[]);

      const handleSubmit = async (e) => {
        e.preventDefault();

        if(email === "") {
            setError_list_email("Email is required");
        }

        if(password === "") {
            setError_list_password("Password is required");
        }

        let item = {email, password};

        let result = await fetch(`${base_url}/api/login`, {
          method: 'POST',
          headers: {
            "Content-Type":"application/json",
            "Accept":'application/json'
          },
          body:JSON.stringify(item)
        });
        
        result = await result.json();

    
        localStorage.setItem("user-info", JSON.stringify(result))
        if(result.status === 200 && result.data.user_type === 1) {
            navigation('/main-host-account')
        }
        
        if(result.status === 200 && result.data.user_type === 2) {
            navigation('/')
        }
        
        if(result.status === 200 && result.data.user_type === 3) {
            navigation('/admin-dashboard')
        }

        if (result.status === 404) {
            setMommaError(result.error);
        }
      }
  
    return (
        <div className='login-user__page'>

            <div className='login-userPage__info'>

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

                <form className='form-login' onSubmit={handleSubmit}>
                    <h2>Sign in</h2>
                    <input type="email" name="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span className='validate-span'>{error_list_email}</span>
                    <input type="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <span className='validate-span'>{error_list_password}</span>
                    <span style={{ color: '#a10453', marginTop: '10px' }}>{mommaError}</span>
                    <Button variant="outlined" type="submit">Sign in</Button>
                </form>

            </div>

        </div>
    )
}

export default LoginUser