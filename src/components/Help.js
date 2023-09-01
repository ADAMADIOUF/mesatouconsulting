import React from 'react'
import a from "../asset/help.png"
import { NavLink } from 'react-router-dom'
const Help = () => {
  return (
    <div className='help'>
      <div className='container-help section-center'>
        <article>
          <h3>
            If you are looking for immigration help for you, your loved one, or
            your business, we can handle it!
          </h3>
          <p>
            Hiring Mesatou Consulting ILC you not only get an experienced
            immigration attorney, but also someone who understands your unique
            situation. You will get assistance from our professional team every
            step of the process, tailored specifically to your situation.
          </p>
          <button className='btn'>
            <NavLink
              to='mailto:mesatou.consulting@gmail.com?subject=Scheduling a Consultation&body=Please provide your available dates and times for the consultation.'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Schedule a Consultation
            </NavLink>
          </button>
        </article>
        <article>
          <img src={a} alt='' />
        </article>
      </div>
    </div>
  )
}

export default Help