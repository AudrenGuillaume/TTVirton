import React, { Component } from 'react';
import { Menu, Affix, Row, Layout } from 'antd';

import BannerImage from './images/banner.png';

import './banner.less';

class Banner extends Component {
    render() {
    return (
      <Layout className="banner">
        <img src={BannerImage} alt="TT Virton - Logo" />
      </Layout>
    );
  }
}

export default Banner;