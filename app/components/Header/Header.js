import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Banner from './images/banner.png';
import './ant.less';

class Header extends Component {
render() {
  return (
    <div className="header">
      <img src={Banner} alt="TT Virton - Logo" />
      <div className="nav-bar">
        <Button type="primary">Hellp</Button>
        <Link className="router-link" to="/">Home</Link>
        <Link className="router-link" to="/login">Login</Link>
        <Link className="router-link" to="/club">Club</Link>
        <Link className="router-link" to="/matchs">Matchs</Link>
        <Link className="router-link" to="/files">Files</Link>
        <Link className="router-link" to="/files">Contact</Link>
      </div>
    </div>
  );
}
}

export default Header;
