// React
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// Ant design
import { Affix, Col, Icon, Menu, Row } from 'antd';

import './nav.less';


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
                <Row>
                    <Col span={24} >
                        <Menu className="display" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="home"><Link to="/"><Icon type="home"/><span>Home</span></Link></Menu.Item>
                            <Menu.SubMenu title={<Fragment><Icon type="trophy"/><span>Club</span></Fragment>}>
                    
                                <Menu.Item key="c1"><Link to="/joueurs"><span>Joueur</span></Link></Menu.Item>
                                <Menu.Item key="c2"><Link to="/matchs"><span>Matchs</span></Link></Menu.Item>    
                                <Menu.Item key="c3"><Link to="/equipes"><span>Equipes</span></Link></Menu.Item>
                            </Menu.SubMenu>
                            <Menu.Item key="contact"><Link to="/contact"><Icon type="contacts" /><span>Contact</span></Link></Menu.Item>
                            <Menu.Item key="login"><Link to="/login"><Icon type="login"/><span>Login</span></Link></Menu.Item>
                        </Menu>
                    </Col>
                  
                </Row>
            </Affix>
        );
    }
}
export default Navbar;