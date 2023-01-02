import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='social_handles'>
          <p><a href='https://www.facebook.com/DinenStay?mibextid=ZbWKwL' target='_blank' rel='noreferrer'><Facebook /> </a></p>
          <p><a href='https://instagram.com/dinenstay?igshid=YmMyMTA2M2Y' target='_blank' rel='noreferrer'><Instagram /> </a></p>
          <p><a href='https://www.linkedin.com/company/dinenstay/' target='_blank' rel='noreferrer'><LinkedIn /> </a></p>
          <p><a href='https://twitter.com/DinenStay?t=0BgPphiRhNeGJO9D_zFa_g&s=09' target='_blank' rel='noreferrer'><Twitter /> </a></p>
          <p><a href='https://youtube.com/@dinenstay1' target='_blank' rel='noreferrer'><YouTube /> </a></p>
        </div>
        <p>Copyright ©  {new Date().getFullYear()} <span>Dine N'Stay</span> All Rights Reserved</p>
        <p>Privacy . Terms . Sitemap . Company Details</p>
    </div>
  )
}

export default Footer