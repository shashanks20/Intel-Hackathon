import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
const Navbar = () => {


  return (
    <div>
    <nav className="navbar">
      <div className="navbar-left">
      <Link to="/" className='navbar-heading'>
        <span className="site-name">PowerSafe</span>
        </Link>
      
      </div>
      <ul className="navbar-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/state">State</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
