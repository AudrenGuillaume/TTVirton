// React
import React, { Component, PureComponent } from 'react';
import { Helmet } from 'react-helmet';

// Ant design
import { Card, Col, Icon, Layout, Row, Table } from 'antd';
const { Content, Header } = Layout;

// Google Maps
import GoogleMap from '../Google';
// Forms
import ContactForm from '../../components/Forms/Contact'

// Style: global + local
import './contact.less';

const grid_form = { xs: { span: 24, order: 2 }, lg: { span: 11, order: 1 } };
const grid_info = { xs: { span: 24, order: 1 }, lg: { span: 10, offset:1 } };
const grid_map = { xs: { span: 24, order: 3 }, lg: { span: 22} };

const columns = [
    { title: '', dataIndex: 'icon', key: 'icon' },
    { title: '', dataIndex: 'text', className: 'column-info', key: 'text' }
];
const data = [
    { key: 1, icon: <Icon type="environment" />, text: <div><p>Cour Marchal 6/Z,</p><p>6760 Virton,</p><p>Belgique</p></div> },
    { key: 2, icon: <Icon type="phone" />, text: '063/00.00.00' },
    { key: 3, icon: <Icon type="mail" />, text: 'ttvirton@email.com' }
];

const [icon, text] = [{ width: '30%', textAlign: 'center' }, { width: '70%' }]

class ContactPage extends PureComponent {

    render() {
        return (
            <article>
                <Helmet>
                    <title>Contact</title>
                    <meta name="description" content="" />
                </Helmet>
                <Layout>
                    <Content style={{ padding: '30px 16px', background: '#fff'}}>
                        <Row type="flex" justify="center">
                            <Col {...grid_form} >
                                <Card title="Contact">
                                    <ContactForm />
                                </Card>    
                            </Col>
                            <Col {...grid_info} >
                                <Card title="Informations" className="card">
                                    <Row type="flex" textAlign="center" align="middle">
                                        <Col span={4} ><Icon type="environment" /></Col>
                                        <Col span={20}><span>Cour Marchal 6/Z,<br />6760 Virton, <br />Belgique</span></Col>
                                    </Row>
                                    <Row type="flex" textAlign="center" align="middle">
                                        <Col span={4}><Icon type="phone" /></Col>
                                        <Col span={20}>063/00.00.00</Col>
                                    </Row>
                                    <Row type="flex" textAlign="center" align="middle">
                                        <Col span={4}><Icon type="mail" /></Col>
                                        <Col span={20}>ttvirton@mail.com</Col>
                                    </Row>
                                    <Row type="flex" textAlign="center" align="middle">
                                        <Col span={4}><Icon type="tool" /></Col>
                                        <Col span={20}>audren.guilllaume@gmail.com</Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center">
                            <Col {...grid_map}>
                                <Card title={"Google Maps"} className="map">
                                    <div style={{padding: 0,margin:0, height: '400px', width:'90%' }}>
                                    <GoogleMap />
                                    </div>    
                                </Card>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </article >
        );
    }
}

export default ContactPage;

// <Card.Grid style={text}><p>Cour Marchal 6/Z,</p><p>6760 Virton,</p><p>Belgique</p></Card.Grid>  
// <Card.Grid style={icon}><Icon type="phone" /></Card.Grid>
// <Card.Grid style={text}>063/00.00.00</Card.Grid>
// <Card.Grid style={icon}><Icon type="mail" /></Card.Grid>
// <Card.Grid style={text}>ttvirton@email.com</Card.Grid>
// <Card.Grid style={icon}><Icon type="tool" /></Card.Grid>
// <Card.Grid style={text}>Technical support: audren.guilllaume@gmail.be</Card.Grid>