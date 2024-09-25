//import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import About from './Pages/About/About'
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact/Contact'
import BlogApp from './Blog/BlogApp'
import AdminDashBoard from './Blog/AdminDashBoard'
import PostDetails from './Blog/PostDetails'
import AdminLogin from './Blog/AdminLogin'
import EditPost from './Blog/EditPost'

function App() {
  return (
    <>
    {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path="/blog" element={<BlogApp />} />
        <Route path="/admin" element={<AdminDashBoard />} />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/edit/:id" element={<EditPost />} />  {/* Edit route */}
      </Routes>
      <Footer />
    </>
  )
}

export default App