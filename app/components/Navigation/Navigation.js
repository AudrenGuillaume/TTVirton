import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Affix, Row } from 'antd';
import './ant.less';

class Navbar extends Component {
    state = { current: 'home' };

    handleClick = (e) => this.setState({ current: e.key });

    render() {
        return (
            <Row justify="center">
                <Affix>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="home"><Link className="link" to="/">Home</Link></Menu.Item>
                <Menu.Item key="club"><Link className="link" to="/club">Club</Link></Menu.Item>
                <Menu.Item key="contact"><Link className="link" to="/files">Contact</Link></Menu.Item>
                <Menu.Item key="log"><Link className="link" to="/login">Login</Link></Menu.Item>        
                </Menu>
                </Affix>    
            </Row>
        );
    }
}

export default Navbar;




// <Row justify="center">
// <Affix>
//     <p>ookk</p>
// </Affix>
// </Row>