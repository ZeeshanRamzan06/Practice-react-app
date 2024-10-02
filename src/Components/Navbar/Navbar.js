import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
   <nav className="navbar">
      <div className="navbar-logo">
        <Link to='/'>ZeeTech</Link>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about-us">About Us</a></li>
        <li><Link to='/contact-us'>Contact Us</Link></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
      <div className="navbar-icons">
        <input type="text" className="search-bar" placeholder="Search..." />
        <a href="/cart" className="icon">🛒</a>
        <Link to="/login" className="btn-signin">Sign In</Link>
      </div>
    </nav>
   </>
  )
}

export default Navbar