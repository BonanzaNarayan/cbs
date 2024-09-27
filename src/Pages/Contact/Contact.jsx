/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import './Contact.css'
import { FaSquareInstagram } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";

import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

function Contact() {
  return (
    <div>
    <Header />
        <section className='h-[20vh]'>

        </section>
        <div className="contactSec min-h-[90vh] shadow-2xl">
            <div className="contactLinks relative">
                <div className='m-5 grid gap-5'>
                    <h1 className='text-blue-800 text-3xl'>Let's get in touch</h1>
                </div>
                <ul className='m-5'>
                    <li><FaMapLocation /> Tema, Greater Accra - Ghana</li>
                    <li>
                        <div className='mt-5'>
                            <p className='text-blue-800 font-bold'><FaPhoneAlt /> Contact Numbers</p>
                            <p><span className='text-blue-500'>General Inquiries:</span> +233 (0) 59 495 7712</p>
                            <p><span className='text-blue-500'>Client Support:</span> +233 (0) 27 580 7551</p>
                        </div>
                    </li>

                    <li>
                        <div className='mt-5'>
                            <h2 className='text-blue-800 font-bold'><MdMarkEmailRead /> Email Addresses</h2>
                            <p><span className='text-blue-500'>General Inquiries:</span> corporatebosssolutions@gmail.com</p>
                            <p><span className='text-blue-500'>Client Support:</span> info@cbs.com</p>
                        </div>
                    </li>
                </ul>

                <div className='linksSec m-5 absolute bottom-0'>
                    <h1 className='text-blue-800 font-bold'>Connect with us:</h1>
                    <div className='flex gap-5 flex-wrap'>
                        <a href="https://www.linkedin.com/company/101210241/admin/inbox?lipi=urn%3Ali%3Apage%3Aorganization_admin_admin_inbox_index%3Bf48ee5df-c992-42b5-adf7-6c5ad00c4dfe" target='_blank'><ImLinkedin className="text-blue-800 size-8" /></a>
                        <a href="https://web.facebook.com/me/" target='_blank'><ImFacebook2 className="text-blue-800 size-8" /></a>
                        <a href="'https://www.instagram.com/corporate__bs" target='_blank'><FaSquareInstagram className="text-blue-800 size-8" />
                        </a>
                        <a href="https://twitter.com/corporate__BS" target='_blank'><BsTwitterX className="text-blue-800 size-8" /></a>
                    </div>
                </div>
            </div>

            <div className="form">
                <form action="https://formsubmit.co/corporatebosssolutions@gmail.com" className='form1'>
                <h1 className='top-0 left-0 m-5 text-white text-3xl text-start w-[100%]'>Contact us</h1>
                    <input type="text"  name='Name' placeholder='Full Name' required/>

                    <input type="email" name='Email' placeholder='Email' required/>

                    <input type="number" placeholder='Number' name='Number' required/>

                    <textarea name="Message" cols="30" rows="10" placeholder='Message' required></textarea>

                    <input type="submit" value="SUBMIT" />
                </form>
            </div>
        </div>
    <Footer />
    </div>
  )
}

export default Contact;