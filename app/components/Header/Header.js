import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Affix, Icon, Row } from 'antd';
import Banner from './images/banner.png';
import './ant.less';

class Header extends Component {
  state = { current: 'home' };

  handleClick = (e) => 
    this.setState({ current: e.key });

  render() {
    return (
      <div className="header" style={{ textAlign: 'center' }} >
        <img src={Banner} alt="TT Virton - Logo" />
        <Row type="flex" justify="center">
        <Affix>  
        <Menu className="menu" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="home"><Link className="link" to="/">Home</Link></Menu.Item>
          <Menu.Item key="club"><Link className="link" to="/club">Club</Link></Menu.Item>
          <Menu.Item key="contact"><Link className="link" to="/files">Contact</Link></Menu.Item>
          <Menu.Item key="log"><Link className="link" to="/login">Login</Link></Menu.Item>        
            </Menu>
        </Affix>  
        </Row>  
      </div>
    );
  }
}

export default Header;

// <div className="nav-bar">
// <Button type="primary">Hellp</Button>
// <Link className="router-link" to="/">Home</Link>
// <Link className="router-link" to="/login">Login</Link>
// <Link className="router-link" to="/club">Club</Link>
// <Link className="router-link" to="/matchs">Matchs</Link>
// <Link className="router-link" to="/files">Files</Link>
// <Link className="router-link" to="/files">Contact</Link>
// </div>
