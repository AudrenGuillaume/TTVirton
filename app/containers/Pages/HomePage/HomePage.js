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
import {PostList} from 'containers/PostListItem';
import './home.less';

const grid_text = { xs: { span: 24 }, lg: { span: 20, offset:1} };
const grid_anchor = { xs: { span: 0 }, lg: { span: 3} };

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
            <Col {...grid_text}>
              <PostList />
              <article>
                <h2 id="header-1">Header 1</h2>
                <p>latinlorumokdokowkdpwkookef</p>
                <h2 id="header-2">Header 2</h2>
                <p>latinlorumokdokowkdpwkookef</p>  
            </article>  
            </Col>
            <Col {...grid_anchor}>
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

// 10 12 mots par lignes