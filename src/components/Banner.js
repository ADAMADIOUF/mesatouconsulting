import React from 'react'
import a from '../asset/banner-img.png'
import { motion } from 'framer-motion'

const Banner = () => {
  const dialPhone = () => {
    window.location.href = 'tel:701-441-1924'
  }
  return (
    <div className='banner section-center'>
      <motion.article
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='banner-details'
      >
        <h3>Feel Confident About Your Immigration Process</h3>
        <p>
          Immigration law simplified. A law firm focused only on immigration can
          save you time, money, and headaches.
        </p>
        <button className='btn btn-banner' onClick={dialPhone}>
          Contact Us Now
        </button>
      </motion.article>

      {/* Image Animation */}
      <motion.article
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='banner-img'
      >
        <img src={a} alt='' />
        <div className='banner-contact'>
          <span className='call'>Call us now</span>
          <span className='number' onClick={dialPhone}>
            701-441-1924
          </span>
        </div>
      </motion.article>
    </div>
  )
}

export default Banner
