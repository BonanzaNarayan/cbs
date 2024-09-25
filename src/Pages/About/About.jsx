// import React from 'react'
import about from './data'
import './About.css'
import group from '../../assets/icons/group.jpg'
import hand from '../../assets/icons/hand.jpg'
import team from '../../assets/icons/customer.png'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

function About() {
  return (
    <div>
      <Header />
      <div className='about'>
        <div className="heads-about">
          <h1>About Us <hr /></h1>
          <p>Welcome to Corporate Boss Solutions, where expertise meets innovation to deliver comprehensive
            solutions tailored to the needs of modern businesses. As a dynamic and forward-thinking company,
            we specialize in providing a wide range of services spanning IT, financial consultancy, professional and
            academic writing, and real estate.</p>
          <p>Our mission is simple: to empower businesses with the tools, insights, and support they need to thrive
            in today's competitive landscape. With a team of seasoned professionals who bring years of industry
            experience and a passion for excellence, we are committed to delivering results that exceed
            expectations and drive success for our clients.</p>

            <ul>
              <li>❖ IT Services: Our dedicated IT team offers a suite of services including software development, web design, cybersecurity solutions, cloud computing, data analytics, and IT consulting. We work closely with clients to develop customized IT solutions that enhance efficiency, streamline operations, and drive innovation.</li>
              <li>❖ Financial Consultancy: Leveraging our expertise in finance and investment, we provide comprehensive financial consultancy services tailored to the unique needs of each client. From financial planning and investment advisory to risk management and mergers and acquisitions consulting, we help businesses navigate complex financial landscapes and achieve their goals.</li>
              <li>❖ Professional and Academic Writing: Our team of skilled writers and editors specializes in crafting compelling content for both professional and academic purposes. Whether it's business reports, marketing materials, academic papers, or technical documentation, we deliver polished and engaging content that resonates with audiences and drives results.</li>
              <li>❖ Real Estate: In the realm of real estate, we offer a range of services including property management, brokerage, investment analysis, and leasing. With our in-depth market knowledge and strategic insights, we assist clients in finding the perfect real estate solutions that align with their business objectives and drive growth.</li>
            </ul>
        </div>
        <div className="heads-img">
          <img src={hand} alt="" />
          <img src={group} alt="" />
        </div>

        <div className="box">
          <img src={team} alt="" />
          <h1>Our Management Team</h1>
        </div>
        <div className="teams">
          {about.map((person, index)=>(
            <a key={index}
            href={person.link}
            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <span
              className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>
    
            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {person.name}
                </h3>
    
                <p className="mt-1 text-xs font-medium text-gray-600">{person.role}</p>
              </div>
    
              <div className="hidden sm:block sm:shrink-0">
                <img
                  alt=""
                  src={person.img}
                  className=" rounded-lg object-cover shadow-sm size-20"
                />
              </div>
            </div>
    
            <div className="mt-4">
              <p className="text-pretty text-sm text-gray-500">
                {person.desc}
              </p>
            </div>
    
            <dl className="mt-6 flex gap-4 sm:gap-6 justify-end">
              <div className="flex flex-col-reverse">
                <a href={person.link} className="text-sm font-medium text-blue-600">View More</a>
              </div>
            </dl>
          </a>
          ))}
        
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About