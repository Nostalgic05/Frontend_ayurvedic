import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, overflow: 'hidden' }}>
        <li style={{ float: 'right' }}>
          <a href="#contact" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>Contact</a>
        </li>
        <li style={{ float: 'right' }}>
          <a href="#signup" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>Sign Up</a>
        </li>
        <li style={{ float: 'right' }}>
          <a href="#login" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>Login</a>
        </li>
        <li style={{ float: 'right' }}>
          <a href="#home" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>Home</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
