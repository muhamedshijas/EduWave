import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='nav'>
     <div className="nav-logo">
     Logo
     </div>

     <div className="nav-links">
     <ul>
     <li>Home</li>
     <li>About</li>
     <li>Contact</li>
     <li>Services</li>
     <li> <button>Get Started</button></li>
     </ul>
     </div>
    </div>
  )
}

export default Navbar
