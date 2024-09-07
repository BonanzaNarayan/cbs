import React from 'react'
import './About.css'
import group from '../../assets/icons/group.jpg'
import hand from '../../assets/icons/hand.jpg'
import team from '../../assets/icons/customer.png'

function About() {
  return (
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
            <li>❖ IT Services: Our dedicated IT team offers a suite of services including software
development, web design, cybersecurity solutions, cloud computing, data
analytics, and IT consulting. We work closely with clients to develop customized
IT solutions that enhance efficiency, streamline operations, and drive innovation.</li>
            <li>❖ Financial Consultancy: Leveraging our expertise in finance and investment, we
provide comprehensive financial consultancy services tailored to the unique
needs of each client. From financial planning and investment advisory to risk
management and mergers and acquisitions consulting, we help businesses
navigate complex financial landscapes and achieve their goals.</li>
            <li>❖ Professional and Academic Writing: Our team of skilled writers and editors
specializes in crafting compelling content for both professional and academic
purposes. Whether it's business reports, marketing materials, academic papers,
or technical documentation, we deliver polished and engaging content that
resonates with audiences and drives results.</li>
            <li>❖ Real Estate: In the realm of real estate, we offer a range of services including
property management, brokerage, investment analysis, and leasing. With our
in-depth market knowledge and strategic insights, we assist clients in finding the
perfect real estate solutions that align with their business objectives and drive
growth.</li>
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

        <div className="team">
          <div className="left">
            <div className="img-1"></div>
            <p>Chief Executive Officer</p>
          </div>
          <div className="right">
            <h2>Joseph Wirem</h2>
            <p>Joseph Wirem is the visionary force behind Corporate Boss Solutions. He is a Certified Google IT support Technician, holds a certificate in Financial Modelling & Valuation Analyst (FMVA)® from the Corporate Finance Institute, Canada, and a level 400 BSc Administration (Accounting major) student at the University of Ghana Business School (UGBS). He has vast experience in Accounting & Finance, Administration, and Teaching & Research.</p>
          </div>
        </div>

        <div className="team">
          <div className="left">
            <div className="img-2"></div>
            <p>Executive Director</p>
          </div>
          <div className="right">
            <h2>Godwin Adu Brefo</h2>
            <p>Godwin Adu Brefo serves as the Executive Director of Corporate Boss Solutions, leveraging his visionary leadership to drive the company's success. Concurrently, he pursues his academic endeavors at the University of Professional Studies Accra (UPSA), currently in his third year of study. With a robust skill set encompassing accounting, finance, administration, and graphic design.</p>
          </div>
        </div>

        {/* <div className="team">
          <div className="left">
            <div className="img-2"></div>
            <p>Executive Director</p>
          </div>
          <div className="right">
            <h2>Godwin Adu Brefo</h2>
            <p>Godwin Adu Brefo serves as the Executive Director of Corporate Boss Solutions, leveraging his visionary leadership to drive the company's success. Concurrently, he pursues his academic endeavors at the University of Professional Studies Accra (UPSA), currently in his third year of study. With a robust skill set encompassing accounting, finance, administration, and graphic design.</p>
          </div>
        </div> */}

        <div className="team">
          <div className="left">
            <div className="img-3"></div>
            <p>Chief Strategy Officer</p>
          </div>
          <div className="right">
            <h2>Isaac Wirem</h2>
            <p>Isaac Wirem is the chief strategy officer. He holds a degree in Business Administration (Human Resource) -First class honors from the University of Education, Winneba (UEW) and a professional certificate from the Chartered Institute of Human Resource Management (CIHRM), Ghana. He has over 10 years' experience in administration, teaching, and research. He is also an associate member of the Chartered Institute of Human Resource management, Ghana (CIHRM)</p>
          </div>
        </div>

        <div className="team">
          <div className="left">
            <div className="img-4"></div>
            <p>Financial Engineer</p>
          </div>
          <div className="right">
            <h2>Stephen Wirem</h2>
            <p>Stephen Wirem is the Financial Engineer. He is an experienced banker. He holds a degree- BA (Finance and Mathematics) from the University of Ghana, Legon. He has rich experience in Finance and Investment, Financial Risk Management ,Insurance , Teaching, and Research.</p>
          </div>
        </div>

        <div className="team">
          <div className="left">
            <div className="img-5"></div>
            <p>IT Executive </p>
          </div>
          <div className="right">
            <h2>Bonanza Kweku Narayan</h2>
            <p>Bonanza Kweku Narayan is the IT Executive. He is a skilled software developer  pursuing a Bachelor of Science in Information Technology Management at  UPSA. Through self-learning platforms like FreeCodeCamp and Harvard University's CS50 course, he has honed his skills in JavaScript, HTML, CSS, Python, React, Node.js, and MongoDB. Specializing in full-stack development, he ensures seamless integration and optimal performance across both front-end and back-end aspects of projects.</p>
          </div>
        </div>

        <div className="team">
          <div className="left">
            <div className="img-6"></div>
            <p>Company Secretary </p>
          </div>
          <div className="right">
            <h2>Tracy Afia Ahensima Danso</h2>
            <p>Tracy Afia Ahensima Danso is a dedicated Level 200 student at Central University, majoring in Media and Communication Studies. With a strong foundation in communication theory and practice, Tracy brings a fresh perspective to our team. Her leadership skills are evident in her proactive approach to tasks, ensuring efficient coordination and execution of responsibilities. Tracy's writing abilities are top-notch, evident in her clear and concise communication style. As our Company Secretary, Tracy plays a crucial role in maintaining smooth operations and fostering effective communication within our organization.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About