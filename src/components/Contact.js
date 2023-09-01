import React, { useEffect } from 'react'
import tons from "../asset/tons1.png"
import { motion } from 'framer-motion'
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime, MdDateRange } from 'react-icons/md'
import Map from "./Map"

import banner from '../asset/about.mp4'
import LastBanner from './LastBanner'

const Contact = () => {
 
  return (
    <div className='contact'>
      <div className='about-banner'>
        <video className='about-banner-video' autoPlay loop muted>
          <source src={banner} type='video/mp4' />
        </video>
        <h2>Contact</h2>
      </div>
      <div className='contact-bg'>
        <div className='contact-container section-center'>
          <article>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='contact-details'
            >
              MESATOU Consulting,LLC Papa Badara Mbegue
            </motion.h3>
            <img src={tons} alt="" className='img-contact' />
          </article>
          <article>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className='contact-details'>Contact details</h3>
              <p>
                <MdLocationOn className='icon-contact' /> North Carolina
              </p>
              <p>
                <MdPhone className='icon-contact' /> 701-441-1924
              </p>
              <p>
                <MdEmail className='icon-contact' />{' '}
                mesatou.consulting@gmail.com
              </p>
            </motion.div>
            <motion.div
              className='contact-details'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3>Work Hours</h3>
              <p>
                <MdDateRange className='icon-contact' /> <span>Mon-Fri: </span>{' '}
                <MdAccessTime className='icon-contact' /> 8AM-4PM
              </p>
              <p>
                <MdDateRange className='icon-contact' /> <span>Sat-Sun: </span>{' '}
                <MdAccessTime className='icon-contact' /> Closed
              </p>
            </motion.div>
          </article>
        </div>
        <div className='map'>
          <Map />
        </div>
      </div>
      <LastBanner />
    </div>
  )
}

export default Contact
