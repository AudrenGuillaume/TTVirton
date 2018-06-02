// React
import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

// Ant design
import { Col, Layout, Row } from 'antd';
const { Content } = Layout;

// Components
import Login from '../../components/Forms/Login';

// Class
class LoginPage extends Component {

    render() {

        return (
            <Fragment>
                <Helmet>
                    <title>Login</title>
                    <meta name="connexion" content="" />
                </Helmet>
                <Content>
                    <Row type="flex" justify="center" align="middle" className="login_page">
                        <Col md={{ span: 6 }}>
                            <Login />
                        </Col>
                    </Row>
                </Content>
            </Fragment>
        )
    }
}

export default LoginPage;

