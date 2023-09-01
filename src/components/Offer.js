import React from 'react'
import {
  FaUsers,
  FaGlobeAmericas,
  FaShieldAlt,
  FaBriefcase,
  FaFlagUsa,
  FaUniversalAccess,
} from 'react-icons/fa'

const Offer = () => {
  return (
    <div className='offer'>
      <div className='offer-title'>
        <h3>What We Offer</h3>
      </div>
      <div className='offer-container section-center'>
        <article>
          <h3>
            Family-Based Immigration <FaUsers className='icon-offer' />
          </h3>
          <h3>
            Consular Processing <FaGlobeAmericas className='icon-offer' />
          </h3>
          <h3>
            Temporary Protected Status <FaShieldAlt className='icon-offer' />
          </h3>
        </article>
        <article>
          <h3>Initial Consultation</h3>
          <h1>$ 200</h1>
          <p>
            Get 1 hour to consult with an ILC immigration attorney. Our case
            manager will contact you ahead of time to prepare you for the
            meeting.
          </p>
        </article>
        <article>
          <h3>
            <FaBriefcase className='icon-offer' /> Business Immigration
          </h3>
          <h3>
            <FaFlagUsa className='icon-offer' /> Citizenship & Naturalization
          </h3>
          <h3>
            <FaUniversalAccess className='icon-offer' /> U-Visas and VAWA
          </h3>
        </article>
      </div>
    </div>
  )
}

export default Offer
