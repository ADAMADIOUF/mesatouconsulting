import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../asset/logo1.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
   const closeMenu = () => {
     setIsOpen(false)
   }
const dialPhone = () => {
  window.location.href = 'tel:701-441-1924'
}
const closeMenuAndScrollToTop = () => {
  closeMenu() 
  window.scrollTo(0, 0) 
}

  return (
    <nav className='navbar'>
      <div className='navbar-brand '>
        <NavLink
          to={`/`}
          className='navbar-item'
          onClick={(closeMenu, closeMenuAndScrollToTop)}
        >
          <img src={logo} className='logo' alt='' />
        </NavLink>

        <button className='navbar-burger' onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <NavLink
            exact
            to='/'
            className='navbar-item'
            
            onClick={(closeMenu, closeMenuAndScrollToTop)}
          >
            Home
          </NavLink>
          <NavLink
            to='/about-us'
            className='navbar-item'
            
            onClick={(closeMenu, closeMenuAndScrollToTop)}
          >
            About Us
          </NavLink>
          <NavLink
            to='/services'
            className='navbar-item'
            
            onClick={(closeMenu, closeMenuAndScrollToTop)}
          >
            Services
          </NavLink>

          <NavLink
            to='/contact'
            className='navbar-item'
            
            onClick={(closeMenu, closeMenuAndScrollToTop)}
          >
            Contact
          </NavLink>
          <span className='navbar-item' onClick={dialPhone}>
            Call Us At: 701-441-1924
          </span>
          <span className='navbar-item'>
            <button className='button is-primary'>
              <NavLink
                to='mailto:mesatou.consulting@gmail.com?subject=Scheduling a Consultation&body=Please provide your available dates and times for the consultation.'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Schedule a Consultation
              </NavLink>
            </button>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
