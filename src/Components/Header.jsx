// Header.jsx
import React, { useContext } from 'react';
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

  const handleReload = () => {
    window.location.reload();
  };

  return (
   <>
      <Navbar fixed='top' className='mx-5 pb-2 mt-3 nvbr shadow-sm' style={{ border: 'none' }}>
      <div className='d-flex align-items-center my-1  container-fluid'>
        <div className='ms-1'><img className='logo' src="./logo.png" width={50} alt="" /></div>
        <Nav className="collapse navbar-collapse">
          <Link style={{ textDecoration: 'none' }} to={'/'} className='me-5 header-icon'><img className='icon' width={35} src='./home.png'/></Link>
          <button onClick={handleReload} style={{ border:'none',backgroundColor:'transparent' }} to={'/'} className='mx-5 p-0 btn header-icon'><i className="fs-4 fa-solid fa-arrow-rotate-right "></i></button>
          <div className="switch ms-5 me-5">
            <div class="theme-container shadow-dark">
              <img width={30} onClick={handleSwitchChange} checked={theme === "dark"} id="theme-icon" src={theme === 'dark' ? sun : moon} alt="ERR"/>
            </div>
          </div>
        </Nav>
      </div>
    </Navbar>
   </>
  
  
  );
}

export default Header;
