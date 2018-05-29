// React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Ant design
import { Affix, Col, Menu, Row } from 'antd';
import './ant.less';

class Navbar extends Component {
    state = { current: 'home' };

    handleClick = (e) => this.setState({ current: e.key });

    // Fix:  select the correct item. 
    componentDidMount() {
        this.setState({ current: location.pathname.replace('/', '') || this.state.current });
    }

    // TODO Responsive
    render() {
        return (
            <Affix>
                <Row className="Nav">
                    <Col span={23} >
                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
                            <Menu.Item key="club"><Link to="/club">Club</Link></Menu.Item>
                            <Menu.Item key="contact"><Link to="/contact">Contact</Link></Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={1} justify="end">
                        <Row type="flex" justify="end">
                            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                                <Menu.Item key="login"><Link to="/login">Login</Link></Menu.Item>
                            </Menu>
                        </Row>
                    </Col>
                </Row>
            </Affix>
        );
    }
}

export default Navbar;