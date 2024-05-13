import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className="footer-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
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