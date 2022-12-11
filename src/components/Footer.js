import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <p>Copyright ©  {new Date().getFullYear()} <span>Dine N'Stay</span> All Rights Reserved</p>
        <p>Privacy . Terms . Sitemap . Company Details</p>
    </div>
  )
}

export default Footer