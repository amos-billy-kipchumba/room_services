import React, {useEffect} from 'react'
import './HostDashboard.css'
import Button from '@mui/material/Button';
import Video1 from './videos/Welcome Video - Bokeh.mkv'
import {useNavigate} from 'react-router-dom'

function HostDashboard() {
    const navigate = useNavigate();

    //Scroll to the top on load
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load

  return (
    <div className='host-dashboard__page'>

        <div className='host-dashboardPage__info'>
            <div className="open-doors">
                <div className='open-doors-left'>
                    <h1>Open your door <br /> to hosting</h1>
                    <Button onClick={()=> navigate('/become-a-host-register')}>Try hosting</Button>
                </div>
                <div className='open-doors-right'>
                    <video autoPlay muted loop className='door-video'>
                        <source src={Video1} type="video/mp4"></source>
                    </video>
                </div>
            </div>

            <div className="find-out-earn">
                <h1>Find out what you could <br /> earn as a Host</h1>
            </div>

            <div className='find-out-button'>
                <div className='find-out-button-one'>Hosts in your area earn an average of * <br /> <span>$784 / month</span></div>
                <div className='find-out-button-two'>They earn <br /> <span>$49 / night</span></div>
                <div className='find-out-button-three'>They're booked <br /> <span>16 nights / month</span></div>
            </div>

            <div className="about-yourself">
                <h4>Tell us about your place</h4>
            </div>
        </div>

    </div>
  )
}

export default HostDashboard