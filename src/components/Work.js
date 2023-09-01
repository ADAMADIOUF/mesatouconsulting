import React from 'react'
import { FaHandshake, FaMoneyBillWave, FaAllergies } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const Work = () => {
  
  return (
    <div className='work'>
      <div className='work-title section-center'>
        <h3>Why Do People Decide To Work With Us?</h3>
        <div className='work-container'>
          <article>
            <span className='icon-work'>
              <FaHandshake />
            </span>
            <h3>Gain Certainty:</h3>
            <p>Help every step of the way from an experienced legal team.</p>
          </article>
          <article>
            <span className='icon-work'>
              <FaMoneyBillWave />
            </span>
            <h3>Save money:</h3>
            <p>
              Don’t make early mistakes that will be expensive to fix later.
              Also, hire a law firm with affordable prices and payment plans.
            </p>
          </article>
          <article>
            <span className='icon-work'>
              <FaAllergies />
            </span>
            <h3>Eliminate Your Stress:</h3>
            <p>
              Have the process simplified. ILC's immigration lawyers have a
              proven track record to help you through your immigration process.
            </p>
          </article>
        </div>
        <button className='btn'>
          <NavLink
            to='mailto:mesatou.consulting@gmail.com?subject=Scheduling a Consultation&body=Please provide your available dates and times for the consultation.'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Schedule a Consultation
          </NavLink>
        </button>
      </div>
    </div>
  )
}

export default Work
