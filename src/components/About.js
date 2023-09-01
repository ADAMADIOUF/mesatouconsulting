import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import a from '../asset/about1.png'
import b from '../asset/about2.png'
import banner from '../asset/about.mp4' // Make sure this path is correct
import LastBanner from './LastBanner'

const About = () => {
 
  return (
    <div className='about'>
     
      <div className='about-banner'>
        <video className='about-banner-video' autoPlay loop muted>
          <source src={banner} type='video/mp4' />
        </video>
        <h2>About Us</h2>
      </div>
     
      <div className='about-container section-center'>
      
        <article>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Welcome to our immigration consultancy. Established in [Year], we
            have been at the forefront of offering comprehensive immigration
            solutions.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Our mission is simple yet impactful: To simplify the complex
            immigration process for individuals and families, making their dream
            of relocating to a new country a reality.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            With a team of immigration experts and legal professionals, we have
            assisted thousands of clients in navigating the intricate paths of
            visas, green cards, and citizenship.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Our extensive experience allows us to handle a variety of
            immigration cases, including challenging ones that require an
            in-depth understanding of immigration laws.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            We are more than just a consultancy; we are advocates for your
            dreams and rights. Whether it's reuniting families or assisting
            professionals in career transitions to other countries, we are there
            every step of the way.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Our core values are deeply rooted in the philosophy of integrity,
            compassion, and excellence. We hold ourselves to the highest
            standards, aiming to provide an unparalleled level of service.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            As the immigration landscape changes, we adapt and grow, ensuring
            that we are always prepared to guide our clients through every
            challenge and opportunity they face.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Thank you for considering us for your immigration needs. We look
            forward to making a meaningful difference in your life.
          </motion.p>
        </article>
        
        <article>
          <img src={a} alt='' />
        </article>
       
        <article>
          <img src={b} alt='' />
        </article>
      
        <article>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Not only do we provide personalized immigration solutions, but we
            also have a strong commitment to community involvement. We regularly
            hold workshops, seminars, and webinars to educate the public on the
            latest immigration policies, helping you make well-informed
            decisions.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Our dedicated research and development team continuously explores
            new avenues and updates in immigration law, ensuring that we are
            always at the cutting edge of the industry. We understand the
            importance of staying current in a landscape that can change
            overnight.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            We also believe in the power of technology to simplify the
            immigration process. Our online platform is user-friendly and offers
            a seamless experience from initial consultation to case completion.
            Clients have access to real-time case updates, keeping them informed
            at every stage.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Our client testimonials speak volumes about our expertise and
            dedication. With a near-perfect success rate, we have garnered trust
            not just domestically but also from international clients who have
            availed themselves of our services for global immigration options.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            But what truly sets us apart is our personal approach. We understand
            that every client's immigration needs are unique. Hence, we don't
            believe in a one-size-fits-all model. Our initial consultations dig
            deep into individual circumstances to draft a tailored immigration
            roadmap for each client.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Furthermore, we are well aware of the emotional toll that
            immigration procedures can take on individuals and families. That's
            why we don't just offer legal advice; we also provide emotional and
            psychological support, ensuring that you never feel alone during
            this challenging journey.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            We collaborate closely with various governmental and
            non-governmental organizations, ensuring that we can provide
            holistic solutions that consider every aspect of immigration — from
            legal requirements to social integration.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Financial transparency is another cornerstone of our practice. With
            us, there are no hidden fees or unexpected charges. We provide
            detailed quotes upfront, allowing you to budget your immigration
            process without any surprises.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Thank you for your interest in our immigration consultancy services.
            It would be our honor to guide you through the complexities of
            immigration law, giving you the confidence and peace of mind to
            focus on building your new life in a new country.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            We invite you to schedule a free initial consultation with us to
            discuss your specific needs and explore how we can assist you in
            turning your immigration aspirations into a successful reality.
          </motion.p>
        </article>
    
      </div>
      <LastBanner/>
    </div>
  )
}

export default About
