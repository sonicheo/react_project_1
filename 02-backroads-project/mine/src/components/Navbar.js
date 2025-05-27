import React from 'react'
import logo from '../images/logo.svg'

import {pageLinks,navIcons} from '../data.js'



const pageLinks_map = pageLinks.map((link)=>{
  return(
    <li key={link.id} >
      <a href={`#${link.text}`}  className="nav-link"> {link.text} </a>
    </li>
  ) 
});

const navIcons_map = navIcons.map((icon, index)=>{
  return(
    <li key={index} >
      <a href={icon.href} target="_blank" rel="noreferrer" className="nav-icon">
        <i className={icon.className}></i>
      </a>
    </li>
  )
})

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        <ul className="nav-links" id="nav-links">
          {pageLinks_map}
        </ul>

        <ul className="nav-icons">
          {navIcons_map}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar