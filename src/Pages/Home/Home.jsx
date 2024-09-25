//import React from 'react'
import './Home.css'
import visionMision from '../../assets/Data/mision'
import values from '../../assets/icons/values.png'
import check from '../../assets/icons/check.png'
import whyUs from '../../assets/Data/why'

import sst from '../../assets/new_logos/IMG_5070.jpg'
import pl from '../../assets/new_logos/IMG_5069.jpg'
import fwc from '../../assets/icons/FWC.png'
import est from '../../assets/icons/ESTATE.png'
import Hero from '../../Components/Hero'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <main>
      <Header />
      <Hero />
        {/* <div className="container">
          <div className="welcome-home">
            <h2>You're</h2>
            <p>WELCOME TO</p>
            <h1>CORPORATE BOSS SOLUTIONS</h1>
            <p>Corporate Boss Solutions is a multifaceted organization dedicated to providing high-quality services across 
              four distinct sectors, each tailored to meet the diverse needs of our valued clients. </p>
          </div>
        </div> */}


        <div className="mis-vi">

          {visionMision.map((vision,index)=>(
                <article key={index}
                  className="rounded-lg border border-gray-300 bg-white p-4 transition shadow-lg sm:p-6 w-[300px]"
                >
                  <span className="inline-block rounded bg-white p-2">
                    <img src={vision.img} className='size-20' alt="" />
                  </span>

                  <div>
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      {vision.name}
                    </h3>
                  </div>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {vision.text}
                  </p>
                </article>
          ))}
            <div className="values-card">
              <div className=" img-title">
                <img className='size-20' src={values} alt="" />
                <h2>Core Values</h2>
              </div>
              <ul>
                <li><img src={check} alt="" /> Excellence</li>
                <li><img src={check} alt="" /> Integrity</li>
                <li><img src={check} alt="" /> Professionalism</li>
                <li><img src={check} alt="" /> Empowerment</li>
                <li><img src={check} alt="" /> Innovation</li>
                <li><img src={check} alt="" /> Client-Centric Approach</li>
                <li><img src={check} alt="" /> Social Responsibility</li>
              </ul>
            </div>
        </div>
          <div className="why-title">
            <h3>WHY CHOOSE US</h3>
            <p>We are committed to making a valuable contribution to you and your Business.</p>
          </div>
        <div className="why-us">
        {whyUs.map((why,index)=>{
                return <div key={index} className='format'>
                  <div className="card">
                  <img src={why.img} alt="" />
                    <h2>{why.title}</h2>
                  </div>
                    <p>{why.text}</p>
                </div>
            })}
        </div>
            <div className="sub-title">
              <h2>SUBSIDIARY COMPANIES</h2>
            </div>
      <div className="SUBSIDIARy">

        <div className="card">
          <h3>Paper-Link Business Consult </h3>
          <ul>
            <li>CV & Cover Letter Writing</li>
            <li>LinkedIn Optimization</li>
            <li>Business Plans & Business Proposals</li>
            <li>Long Essay/Thesis Assistance/Research Assistance </li>
            <li>Tertiary &Scholarship Application Assistance</li>
            <li>Career Development Training</li>
          </ul>
        </div>

        <div className="card">
          <h3>Real Estate Strategies & Logistics</h3>
          <ul>
            <li>Rental Services</li>
            <li>Strategic Advice on Property Investment </li>
            <li>Mortgage Assistance </li>
            <li>Real Estate Marketing.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Solution Space Technologies</h3>
          <ul>
            <li>Web development & Design </li>
            <li>Graphic Design</li>
            <li>Cyber Security Solutions</li>
            <li>Remote IT Support </li>
            <li>Accounting Software Training; QuickBooks,Spreadsheets, Sage Accounting etc.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Fin Wise Consultancy</h3>
          <ul>
            <li>Tax Consulting Services </li>
            <li>Investment Advisory Service </li>
            <li>Risk Management Consulting Services</li>
            <li>Debt Management & Restructuring Services</li>
            <li>Financial Planning; retirement planning etc.</li>
          </ul>
        </div>

      </div>
      <div className="sub-img">
        <img src={pl} alt="" />
        <img src={est} alt="" />
        <img src={sst} alt="" />
        <img src={fwc} alt="" />
      </div>
      <Footer />
    </main>
  )
}

export default Home