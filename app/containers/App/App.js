/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Navibar from '../../components/Navigation';
import Footer from 'components/Footer';

import { BackTop, Layout } from 'antd';
const { Header } = Layout;

// Style: global & local
import '../../styles/ant.less';
import './app.less';

class App extends Component {
  state = { location: '/' }

  componentDidMount() {
    this.setState({ ...this.state, location: location.pathname });
  }

  render() {
    let current_path = window.location.pathname;
    return (
      <div className="app-wrapper">
        <Helmet titleTemplate="TT Virton - %s" defaultTitle="TT Virton" >
          <meta name="description" content="Actuality page" />
        </Helmet>
        {current_path !== '/' ? (<Header id="header"><Navibar /></Header>) : null}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={FeaturePage} />
          <Route path="/club" component={FeaturePage} />
          <Route path="/matchs" component={FeaturePage} />
          <Route path="/files" component={FeaturePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <BackTop />
        <Footer />
      </div>
    );
  }
}

export default App;
