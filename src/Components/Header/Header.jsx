import './Header.css'
import logo from '../../assets/icons/logo.png'
import { useRef } from 'react';

function Header() {

    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.top = "0"
    }

    const closeMenu = () => {
        menuRef.current.style.top = "-75vh"
    }


  return (
    <header>
        <div className="navBtn" onClick={openMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className="logo">
            <a href="/"><img src={logo} alt="" /></a>
        </div>

        <nav ref={menuRef}>
            <button onClick={closeMenu}>x</button>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </nav>


        <div className="contact">
            <a href="/contact">Contact</a>
        </div>
    </header>
  )
}

export default Header