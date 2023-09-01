import React from 'react'
import { NavLink } from 'react-router-dom' // Add this import
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h4>About Us</h4>
          <p>MESATOU Consulting, LLC is a leading consulting firm...</p>
        </div>
        <div className='footer-section'>
          <h4>Contact</h4>
          <p>
            <FaEnvelope className='footer-icon' /> mesatou.consulting@gmail.com
          </p>
          <p>
            <FaPhone className='footer-icon' /> Phone: +1 (701) 441-1924
          </p>
          <p>
            <FaMapMarkerAlt className='footer-icon' />{' '}
            1101 32 ND AVE SW NORTH CAROLINA
          </p>
        </div>
        <div className='footer-section'>
          <h4>Follow Us</h4>
          <p>
            <NavLink to='/linkedin' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='footer-icon' /> LinkedIn
            </NavLink>
          </p>
          <p>
            <NavLink to='/twitter' target='_blank' rel='noopener noreferrer'>
              <FaTwitter className='footer-icon' /> Twitter
            </NavLink>
          </p>
          <p>
            <NavLink to='/facebook' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='footer-icon' /> Facebook
            </NavLink>
          </p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>
          &copy; {new Date().getFullYear()} MESATOU Consulting, LLC. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
