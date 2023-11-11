// Header.jsx
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App.js';

import './Header.css';

function Header() {
  const sun = './sun.png'
  const moon = "./moon.png"
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleSwitchChange = () => {
    toggleTheme();
  };
  

  return (
    <Navbar className='mx-5 pt-2 nvbr shadow-sm' style={{ border: 'none' }}>
    <div className='d-flex align-items-center mt-3 container-fluid'>
      <div className='ms-1'><img className='logo' src="./logo.png" width={50} alt="" /></div>
      <Nav className="collapse navbar-collapse">
        <Link style={{ textDecoration: 'none' }} to={'/'} className='me-5 header-icon'><img className='icon' width={35} src='./home.png'/></Link>
        <Link style={{ textDecoration: 'none' }} to={'/'} className='mx-5 header-icon'><img className='icon' width={35} src='./search.png'/></Link>
        <div className="switch ms-5 me-1">
          <div class="theme-container shadow-dark">
            <img width={28} onClick={handleSwitchChange} checked={theme === "dark"} id="theme-icon" src={theme === 'dark' ? sun : moon} alt="ERR"/>
          </div>
        </div>
      </Nav>
    </div>
  </Navbar>
  
  
  );
}

export default Header;
