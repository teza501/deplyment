import React from 'react'
import './applypage.css'

const ApplyPage = () => {
  return (
    <div className='apply-page'>
        <h2>Enter your details here</h2>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.142118464587!2d73.18130675!3d22.310464300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b2a798a37f%3A0xf48761c1300253a7!2sVadodara%20Railway%20Station%2C%20Maharaja%20Sayajirao%20University%2C%20Sayajiganj%2C%20Vadodara%2C%20Gujarat%20390005!5e0!3m2!1sen!2sin!4v1682065486378!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className='container'>
          <div className='contact-form'>
            <form action='https://formspree.io/f/xeqwvkeq' method="POST">
              <input type="text"
                name="name"
                placeholder='Enter your Full Name'
                autoComplete='off'
                required 
                />
              <input type="email"
                name="email"
                placeholder='Enter your Email Id '
                autoComplete='off'
                required 
                />
                <textarea name='message'
                cols="30"
                rows="6"
                placeholder='Share your Experience'
                autoComplete='off'
                required
                >
                </textarea>
                <input type="submit" value='send' />

            </form>
          </div>
        </div>
    
    </div>
  )
}

export default ApplyPage