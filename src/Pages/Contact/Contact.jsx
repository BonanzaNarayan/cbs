import React from 'react'
import './Contact.css'

import ig from '../../assets/icons/ig.png'
import link from '../../assets/icons/linkedin.png'
import face from '../../assets/icons/facebook.png'
import twitter from '../../assets/icons/twitter.png'

function Contact() {
  return (
    <div className='contact-page'>
        <div className="title-con">
            <h1>GET IN TOUCH WITH US <hr /></h1>
        </div>
        <div className="container-con">
            <div className="all-info">
                <div className='location'>
                    <p><span>Head Office Address:</span> Tema, Greater Accra - Ghana</p>
                </div>
                <div className='tel'>
                    <ul>
                        <p>Contact Numbers</p>
                        <li>General Inquiries: +233 (0) 59 495 7712</li>
                        <li>Client Support: +233 (0) 27 580 7551</li>
                    </ul>
                </div>
                <div className='emails'>
                    <h2>Email Addresses</h2>
                    <p>General Inquiries: corporatebosssolutions@gmail.com</p>
                    <p>Client Support: info@cbs.com</p>
                </div>
                <div className='socials-links'>
                    <a href='https://www.linkedin.com/company/101210241/admin/inbox?lipi=urn%3Ali%3Apage%3Aorganization_admin_admin_inbox_index%3Bf48ee5df-c992-42b5-adf7-6c5ad00c4dfe'><img src={link} alt="" /> Linkedin</a>

                    <a href='https://twitter.com/corporate__BS'><img src={twitter} alt="" /> Twitter</a>

                    <a href='https://web.facebook.com/me/'><img src={face} alt="" /> Facebook</a>

                    <a href='https://www.instagram.com/corporate__bs'><img src={ig} alt="" /> Instagram</a>
                </div>
            </div>

            <div className="form">
                <h2>You Can Reach Us With This Form <hr /></h2>
                <form action="https://formsubmit.co/corporatebosssolutions@gmail.com">
                    <p>Name <span>*</span></p>
                    <input type="text"  name='Name' placeholder='Full Name' required/>
                    <p>Email <span>*</span></p>
                    <input type="email" name='Email' placeholder='Email' required/>
                    <p>Phone Number (Optional)</p>
                    <input type="number" placeholder='Number' name='Number'/>
                    <p>Message <span>*</span></p>
                    <textarea name="Message" id="" cols="30" rows="10" placeholder='Message' required></textarea>
                    <button type='submit'>Submit ☻</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;