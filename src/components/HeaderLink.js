import React from 'react'
import { Link } from 'react-router-dom';
function HeaderLink({loginDetails}) {

    const GreatLinks = () => {
        if(loginDetails === 1){
            return(
            <Link to='/main-host-account' className='text-decoration-none'>
                <p>Account</p>
            </Link>
            );
        }

        if(loginDetails === 3){
            return(
            <Link to='/admin-dashboard' className='text-decoration-none'>
                <p>Account</p>
            </Link>
            );
        }

        if(loginDetails === 2){
            return(
            <Link to='/customer-main-account' className='text-decoration-none'>
                <p>Account</p>
            </Link>
            );
        }

        if(loginDetails !== 1 && loginDetails !== 2 && loginDetails !== 3){
            return(
            <Link to='/become-a-host' className='text-decoration-none'>
                <p>Become a host</p>
            </Link>
            );
        }
    }
    
  return (
    <div>
        <GreatLinks />
    </div>
  )
}

export default HeaderLink