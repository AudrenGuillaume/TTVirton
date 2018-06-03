/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Affix, Anchor, Col, Layout, Row  } from 'antd';
const { Content } = Layout;
const { Link } = Anchor;

import Banner from 'components/Banner';

import './home.less';

export default class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  onLoad() {
    console.log('damn it');
  } 

  render() {
    return (
      <div>
        <Helmet></Helmet>
        <Banner />
        <Content onLoad={ this.onLoad()}>
          <Row type="flex" justify="space-around">
            <Col span={20} offset={1}>
              <article>
                <h2 id="header-1">Header 1</h2>
                <p>latinlorumokdokowkdpwkookef</p>
                <h2 id="header-2">Header 2</h2>
                <p>latinlorumokdokowkdpwkookef</p>  
            </article>  
            </Col>
            <Col span={3}>
              <Anchor className="onAnchorFixed">
              <Link href="" title="" />
              <Link href="#header-1" title="Header 1" />
                <Link href="#header-2" title="Header 2" />
                <Link href="#API" title="API">
                  <Link href="#Anchor-Props" title="Anchor Props" />
                  <Link href="#Link-Props" title="Link Props" />
                </Link>
              </Anchor>   
            </Col>    
          </Row>
        </Content>
      </div>
    )
  }
}
