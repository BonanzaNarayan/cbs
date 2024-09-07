import React from 'react'
import './Services.css'
import IT from '../../assets/icons/it.png'
import ball from '../../assets/icons/ballpoint.png'
import free from '../../assets/icons/freedom.png'
import house from '../../assets/icons/house.png'
import unseen from '../../assets/new_logos/edu.jpg'
import tech from '../../assets/new_logos/it.jpg'
import austin from '../../assets/new_logos/fin.jpg'
import digital from '../../assets/new_logos/real.jpg'
import graph from '../../assets/icons/graph.png'


function Services() {
  return (
    <main className='services-page'>
      <div className="title">
        <h1>What We Do <hr /></h1>
      </div>

      <div className="offers">

        <div className="offer">
          <img src={IT} alt="" />
          <p>IT <br />SERVICES</p>
        </div>

        <div className="offer">
          <img src={free} alt="" />
          <p>FINANCIAL <br />CONSULTANCY</p>
        </div>

        <div className="offer">
          <img src={ball} alt="" />
          <p>PROFESSIONAL & <br />ACADEMIC WRITING</p>
        </div>

        <div className="offer">
          <img src={house} alt="" />
          <p>REAL ESTATE</p>
        </div>

      </div>

      <div className="services">

        <div className="card">
          <img src={tech} alt="" />
          <h1>IT SERVICES</h1>
          <p>Our dedicated IT team offers a suite of services including software development, web design,cybersecurity solutions, cloud computing, data analytics, and IT consulting. We work closely with clients to develop customized IT solutions that enhance efficiency, streamline operations, and drive innovation.</p>
        </div>

        <div className="card">
          <img src={austin} alt="" />
          <h1>FINANCIAL CONSULTANCY</h1>
          <p>Leveraging our expertise in finance and investment,
we provide comprehensive financial consultancy services
tailored to the unique needs of each client. From financial
planning and investment advisory to risk management
and mergers and acquisitions consulting, we help
businesses navigate complex financial landscapes and
achieve their goals.</p>
        </div>

        <div className="card">
          <img src={unseen} alt="" />
          <h1>PROFESSIONAL &<br />ACADEMIC WRITING</h1>
          <p>Our team of skilled writers and editors specializes
in crafting compelling content for both professional
and academic purposes. Whether it's business
reports, marketing materials, academic papers, or
technical documentation, wedeliver polished and
engaging content that resonates with audiences
and drives results.</p>
        </div>

        <div className="card">
          <img src={digital} alt="" />
          <h1>REAL ESTATE</h1>
          <p>In the realm of real estate, we offer a range of
services including property management,
brokerage, investment analysis, and leasing.
With our in-depth market knowledge and strategic
insights, we assist clients in finding the perfect real
estate solutions that align with their business
objectives and drive growth.</p>
        </div>

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
  )
}

export default Services