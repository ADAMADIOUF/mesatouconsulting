import React from 'react'
import o from '../asset/o1.png'
import a from '../asset/o2.png'
import b from '../asset/03.png'

const HowItsWork = () => {
  const dialPhone = () => {
    window.location.href = 'tel:701-441-1924'
  }
  return (
    <div className='how-its-work section-center'>
      <div className='title-work'>
        <h3 >How it Works</h3>
      </div>
      <div className='container-how-its-work'>
        <article>
          <img className='polygon-clip' src={b} alt='' />
        </article>
        <article>
          <h3>1. Schedule Your Consultation</h3>
          <p>
            Set up your consultation with an ILC attorney now. Many lawyers are
            booked out for weeks, so don’t wait to make your appointment. If our
            availability does not fit your schedule, call us and we will work
            with you to find a good time.
          </p>
        </article>
        <article>
          <img className='polygon-clip' src={a} alt='' />
        </article>
        <article>
          <h3>2. Meet With an Attorney</h3>
          <p>
            There is no reason to undergo the stress of the complicated
            immigration process by yourself. Let a professional help you. An ILC
            attorney can evaluate your immigration situation and determine a
            strategy moving forward.
          </p>
        </article>
        <article>
          <img className='polygon-clip' src={o} alt='' />
        </article>
        <article>
          <h3>3. Ease of Mind Through Your Immigration Process</h3>
          <p>
            Once you sign a representation agreement, ILC will be your
            immigration team assisting you every step of the way. Eliminate your
            stress by having knowledgeable professionals help you strategize on
            the right path and assist you through your immigration process.
          </p>
        </article>
      </div>
      <button className='btn' onClick={dialPhone}>Contact Us Now</button>
    </div>
  )
}

export default HowItsWork
