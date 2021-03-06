/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import MainPage from 'containers/Pages/MainPage/Loadable';
import HomePage from 'containers/Pages/HomePage/Loadable';
import LoginPage from 'containers/Pages/LoginPage/Loadable';
import FeaturePage from 'containers/Pages/FeaturePage/Loadable';
import ContactPage from 'containers/Pages/ContactPage/Loadable';
import NotFoundPage from 'containers/Pages/NotFoundPage/Loadable';

import Navibar from '../../components/Navigation';
import Footer from 'components/Footer';

import { BackTop, Modal, Layout } from 'antd';
const { Header } = Layout;

// Style: global & local
// import './app.less';
import '../../styles/ant.less';

class App extends Component {
  state = { location: '/'}

  componentDidMount() {
    this.setState({ ...this.state, location: location.pathname });
  }

  render() { 
    let current_path = window.location.pathname;
    return (
      <Fragment>
        <Helmet titleTemplate="TT Virton - %s" defaultTitle="TT Virton" >
          <meta name="description" content="Actuality page" />
        </Helmet>
        <Layout>
        <Header id="header"> <Navibar /></Header>  
        <Switch>
          <Route exact path="/" component={HomePage} />  
          <Route path="/login" component={LoginPage} />
          <Route path="/club" component={FeaturePage} />
          <Route path="/matchs" component={FeaturePage} />
          <Route path="/files" component={FeaturePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <BackTop />
          <Footer style={{textAlign: 'center'}}/>
        </Layout>
      </Fragment>
    );
  }
}

export default App;

// <Route exact path="/home" component={HomePage} />

// {current_path !== '/' ? (<Header id="header"><Navibar /></Header>) : null}
