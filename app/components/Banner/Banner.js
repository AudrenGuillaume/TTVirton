import React, { Component } from 'react';
import { Menu, Affix, Row, Layout } from 'antd';

import BannerImage from './images/banner.png';
import './ant.less';

class Banner extends Component {
    render() {
    return (
      <Layout className="header">
        <img src={BannerImage} alt="TT Virton - Logo" />
      </Layout>
    );
  }
}

export default Banner;