import React, { useState } from 'react'
import emailjs from 'emailjs-com'
const LastBanner = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [lastName, setLastName] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_7uk1sug',
        'template_5mj4qui',
        { name, email, lastName },
        'Gc1Gl0HLvCtGvFHPg'
      )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text)
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
        }, 1000)
      })

      .catch((error) => {
        console.error('Email error:', error)
        
      })

    setName('')
    setEmail('')
    setLastName('')
  }
  return (
    <div className='last-banner'>
      <div className='news-letter section-center'>
        <h3>Sign Up For Our Free NewsLetter</h3>
        <form className='form' onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              className='input'
              placeholder='first name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type='text'
              className='input'
              placeholder='last name'
              id='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type='email'
              className='input'
              placeholder='email address'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <button type='submit' className='input btn'>Submit</button>
          </div>
        </form>
        {showSuccess && (
          <div
            className='success-message'
            style={{
              backgroundColor: '#d4edda',
              color: '#333',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '5px',
            }}
          >
            <p>Your message has been sent successfully!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LastBanner