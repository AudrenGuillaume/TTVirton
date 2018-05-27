/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet titleTemplate="TT Virton - %s" defaultTitle="TT Virton" >
      <meta name="description" content="Actuality page" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={FeaturePage} />
      <Route path="/club" component={HomePage} />      
      <Route path="/matchs" component={HomePage} />
      <Route path="/files" component={HomePage} />
      <Route path="/contact" component={HomePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
