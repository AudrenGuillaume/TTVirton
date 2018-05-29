// React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Ant design
import { Affix, Col, Icon, Menu, Row } from 'antd';
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
                            <Menu.Item key="home"><Link to="/"><Icon type="home"/>Home</Link></Menu.Item>
                            <Menu.SubMenu title={<span><Icon type="trophy" />Club</span>}>
                                <Menu.Item key="c1"><Link to="/joueurs">Joueur</Link></Menu.Item>
                                <Menu.Item key="c2"><Link to="/matchs">Matchs</Link></Menu.Item>    
                                <Menu.Item key="c3"><Link to="/equipes">Equipes</Link></Menu.Item>    
                            </Menu.SubMenu>
                            <Menu.Item key="contact"><Link to="/contact"><Icon type="contacts" />Contact</Link></Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={1} justify="end">
                        <Row type="flex" justify="end">
                            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                                <Menu.Item key="login"><Link to="/login"><Icon type="login"/>Login</Link></Menu.Item>
                            </Menu>
                        </Row>
                    </Col>
                </Row>
            </Affix>
        );
    }
}

export default Navbar;