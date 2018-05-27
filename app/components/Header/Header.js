import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from './images/banner.png';
import './style.scss';

class Header extends Component {
render() {
  return (
    <div className="header">
      <img src={Banner} alt="TT Virton - Logo" />
      <div className="nav-bar">
        <Link className="router-link" to="/">Home</Link>
        <Link className="router-link" to="/features">Features</Link>
      </div>
    </div>
  );
}
}

export default Header;
