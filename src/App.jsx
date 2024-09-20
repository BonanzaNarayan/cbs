//import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import About from './Pages/About/About'
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact/Contact'
// import Blogs from './Pages/Blogs/Blogs'

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        {/* <Route path='/blogs' element={<Blogs />}/> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App