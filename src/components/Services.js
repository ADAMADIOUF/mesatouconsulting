import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import LastBanner from './LastBanner'
import banner from '../asset/services.mp4'
import naturalizationImage from '../asset/n.png'
import citizenshipImage from '../asset/c.png'
import familyBasedImage from '../asset/f.png'
import businessImmigrationImage from '../asset/b.png'
import temporaryWorkerImage from '../asset/t.png'
import asylumImage from '../asset/a.png'

const Services = () => {
 
  return (
    <div className='services'>
      <div className='about-banner'>
        <video className='about-banner-video' autoPlay loop muted>
          <source src={banner} type='video/mp4' />
        </video>
        <h2>Services</h2>
      </div>
      <div className='about-container section-center'>
        <article>
          <img src={naturalizationImage} alt='Naturalization' />
        </article>
        <article>
          <h3>Naturalization</h3>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Naturalization is the legal process through which a foreign citizen
            can become a U.S. citizen. We assist you throughout the application
            process, ensuring all criteria and procedural steps are correctly
            followed.
          </motion.p>
        </article>
        <article>
          <img src={citizenshipImage} alt='Citizenship' />
        </article>
        <article>
          <h3>Citizenship</h3>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Citizenship services cover the acquisition, proof, and loss of
            citizenship. We can guide you through complex citizenship cases,
            including those that involve dual citizenship or statelessness
            issues.
          </motion.p>
        </article>
        <article>
          <img src={familyBasedImage} alt='Family-Based Immigration' />
        </article>
        <article>
          <h3>Family-Based Immigration</h3>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Family-Based Immigration services focus on reuniting families across
            borders. Whether it's spousal sponsorship or getting a green card
            for your family member, we are here to guide you.
          </motion.p>
        </article>

        <article>
          {' '}
          <img src={businessImmigrationImage} alt='Business Immigration' />
        </article>
        <article>
          <h3>Business Immigration</h3>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Business Immigration services help entrepreneurs and investors who
            wish to start or invest in businesses in another country. We provide
            tailored strategies for the success of your business immigration
            plan.
          </motion.p>
        </article>

        <article>
          <img src={temporaryWorkerImage} alt='Temporary Worker Visas' />
        </article>
        <article>
          <h3>Temporary Worker Visas</h3>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Temporary Worker Visas allow you to work in another country for a
            specific employer and for a specific period. We navigate you through
            the various types of temporary worker visas and find the best match
            for your situation.
          </motion.p>
        </article>

        <article>
          {' '}
          <img src={asylumImage} alt='Asylum' />
        </article>
        <article>
          <h3>Asylum</h3>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Seeking asylum is a human right. We assist individuals who have been
            persecuted or fear persecution due to race, religion, nationality,
            membership in a particular social group, or political opinion.
          </motion.p>
        </article>
      </div>

      <LastBanner />
    </div>
  )
}

export default Services
