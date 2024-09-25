// import React from 'react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/Services'
import BlogApp from './Blog/BlogApp'

import AdminDashBoard from './Blog/AdminDashBoard'
import PostDetails from './Blog/PostDetails'
import AdminLogin from './Blog/AdminLogin'
import EditPost from './Blog/EditPost'

import FAQs from './Pages/FQAs/FQAs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/blog',
    element: <BlogApp />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/post/:postId',
    element: <PostDetails />
  },
  {
    path: '/admin/login',
    element: <AdminLogin />
  },
  {
    path: '/admin/edit/:id',
    element: <EditPost />
  },
  {
    path: '/admin',
    element: <AdminDashBoard />
  },
  {
    path: '/faqs',
    element: <FAQs />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
