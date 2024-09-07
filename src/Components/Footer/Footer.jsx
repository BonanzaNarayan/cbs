import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className="footer-nav">
            <h3>CEO's Message</h3>
            <p>"We are not building a company; we are building a community of innivotion, integrity, and inspiration. Join us as we shape tomorrow, today. Solution Space Technologies is your go-to partner fro cutting-edgr digital solutions and IT support."</p>
        </div> 

        <div className="subscribe-footer">
          <h1>SUBSCRIBE TO OUR NEWSLETTER <hr /></h1>
          <p>Subscribe to our newsletter and receive exclusive content, expert insights, and special offers delivered directly to your inbox.</p>
          <form className='sub-footer'>
            <input type="text" name='Email ID' placeholder='Email ID' required/> <button type='submit'>Subscribe Now</button>
          </form>
        </div>

        <div className="copy-right">
            <p>Copy right &copy; 2024</p>
            <a href="/">Corporate Boss Solutions</a>
            <p>All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer;