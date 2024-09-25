//import React from 'react'
import './Services.css'
import IT from '../../assets/icons/it.png'
import ball from '../../assets/icons/ballpoint.png'
import free from '../../assets/icons/freedom.png'
import house from '../../assets/icons/house.png'
import data from './data'
import graph from '../../assets/icons/graph.png'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'


function Services() {
  return (
    <div>
      <Header />
    <main className='services-page'>
      <div className="title">
        <h1>What We Do <hr /></h1>
      </div>

      <div className="offers">

        <div className="offer shadow-xl">
          <img src={IT} alt="" />
          <p>IT <br />SERVICES</p>
        </div>

        <div className="offer shadow-xl">
          <img src={free} alt="" />
          <p>FINANCIAL <br />CONSULTANCY</p>
        </div>

        <div className="offer shadow-xl">
          <img src={ball} alt="" />
          <p>PROFESSIONAL & <br />ACADEMIC WRITING</p>
        </div>

        <div className="offer shadow-xl">
          <img src={house} alt="" />
          <p>REAL ESTATE</p>
        </div>

      </div>

      <div className="services">
        {
          data.map((card, index) =>(
            <article key={index} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg w-[400px]">
                <img
                  alt=""
                  src={card.img}
                  className="h-56 w-full object-cover"
                />
              
                <div className="bg-white p-4 sm:p-6">
              
                  <div>
                    <h3 className="mt-0.5 text-lg text-gray-900">{card.name}</h3>
                  </div>
              
                  <p className="mt-2  text-l text-gray-500">
                    {card.desc}
                  </p>
                </div>
            </article>
          ))
        }
      </div>

      <div className="over">
        <div className="left">
          <img src={graph} alt="" />
        </div>
        <div className="right">
          <p>MARKET OVERVIEW <br />
          <span>Target Audience</span>
          </p>

          <ul>
            <p>Our diverse range of services caters to a broad spectrum of individuals:</p>
            <li>Students: Seeking academic success and guidance in tertiary applications.</li>
            <li>Graduates: Navigating the transition into the professional realm.</li>
            <li>Professionals: Looking to enhance their careers and optimize opportunities.</li>
            <li>Investors: Seeking strategic financial planning and wealth preservation.</li>
            <li>Real Estate Enthusiasts: Exploring opportunities for property investment and transactions.</li>
          </ul>
        </div>
      </div>
    </main>
    <Footer />
  </div>
  )
}

export default Services