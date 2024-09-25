//import React from 'react'
import './Footer.css'
import logo from '../../assets/icons/logo.png'

function Footer() {
  return (

  <footer className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2">
        <div
          className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
        >
          

          <div className="mt-8 space-y-4 lg:mt-0">
            <span className="hidden h-1 w-10 rounded bg-blue-600 lg:block"></span>

            <div>
              <h2 className="text-2xl font-medium text-gray-900">Join Us</h2>

              <p className="mt-4 max-w-lg text-gray-500">
              We are not building a company; we are building a community of innivotion, integrity, and inspiration. Join us as we shape tomorrow, today. Solution Space Technologies is your go-to partner fro cutting-edgr digital solutions and IT support.
              </p>
            </div>

            <form className="mt-6 w-full">
              <label htmlFor="UserEmail" className="sr-only"> Email </label>

              <div
                className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
              >
                <input
                  type="email"
                  id="UserEmail"
                  required
                  placeholder="john@rhcp.com"
                  className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm p-3 text-lg"
                />

                <button type='submit'
                  className="mt-1 w-full rounded bg-blue-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-blue-500 sm:mt-0 sm:w-auto sm:shrink-0"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="py-8 lg:py-16 lg:pe-16">
          <div className="size-20">
           <img src={logo} alt="" />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <p className="font-medium text-xl text-blue-600">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> 
                  IT SERVICES </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> FINANCIAL CONSULTANCY </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> PROFESSIONAL &
                  ACADEMIC WRITING </a>
                </li>

                <li>
                  <a href="#s" className="text-gray-700 transition hover:opacity-75"> REAL ESTATE </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-xl text-blue-600">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="/" className=" text-lg text-gray-700 transition hover:opacity-75"> Home </a>
                </li>

                <li>
                  <a href="/services" className="text-gray-700 text-lg transition hover:opacity-75"> Services </a>
                </li>

                <li><a className="text-lg" href="/blog">Blog</a></li>

                <li>
                  <a href="/about" className="text-gray-700 text-lg transition hover:opacity-75"> About </a>
                </li>
                {/* <li><a className="text-lg" href="/admin/login">Login</a></li> */}
                <li><a className="text-lg" href="/admin">Blog Admin</a></li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-xl text-blue-600">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="/contact" className="text-gray-700 text-lg transition hover:opacity-75"> Contact </a>
                </li>

                <li>
                  <a href="faqs" className="text-gray-700 text-lg transition hover:opacity-75"> FAQs </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 text-lg transition hover:opacity-75"> Live Chat </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-8">
            <ul className="flex flex-wrap gap-4 text-xs">
              {/* <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
              </li> */}

              <li>
                <a href="#" className="text-gray-500  transition hover:opacity-75"> Privacy Policy </a>
              </li>
            </ul>

            <p className="mt-8 text-xs text-gray-500">&copy; 2022. Corporate Boss Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;