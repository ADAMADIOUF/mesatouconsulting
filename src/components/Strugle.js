import React, { useEffect, useState } from 'react'
import { FaAngleDoubleLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'
import a from "../asset/struggle.png"
const Strugle = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    const scrolled = window.scrollY
    const element = document.querySelector('.struggle')
    const position = element ? element.offsetTop - 500 : 0 // Adjust the offset value as needed

    if (scrolled > position) {
      setIsVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className='struggle  section-center'>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className='struggle-img'
      >
        <img src={a} alt='' />
      </motion.article>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className='struggle-details'
      >
        <h3>Do You Struggle With:</h3>
        <p>
          <span>
            <FaAngleDoubleLeft />
          </span>
          The complexity of the immigration process?
        </p>
        <p>
          <span>
            <FaAngleDoubleLeft />
          </span>
          Stress from the uncertainty in your immigration process?
        </p>
        <p>
          <span>
            <FaAngleDoubleLeft />
          </span>
          Worry that you will make a mistake that ends up costing you precious
          time and money?
        </p>
        <p>
          <span>
            <FaAngleDoubleLeft />
          </span>
          Confusion about which immigration path is most suitable for your
          situation?
        </p>
        <p>
          <span>
            <FaAngleDoubleLeft />
          </span>
          Fear that a lack of proper legal guidance could lead to deportation?
        </p>
        <p>
          <span>
            <FaAngleDoubleLeft />
          </span>
          Concern that your family may not be able to join you due to visa
          issues?
        </p>
        <p>
          If you have immigration issues, it is very likely that you are not
          aware of everything that you need to do for your immigration
          procedure.
        </p>
      </motion.article>
    </div>
  )
}

export default Strugle