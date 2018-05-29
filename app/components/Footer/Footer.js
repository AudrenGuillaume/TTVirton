import React from 'react';
import { Layout } from 'antd';

const Fo = Layout.Footer;
import './ant.less';

const Footer = () => (
  <Layout style={{textAlign: 'center'}}>
    <Fo>HERS - Copyright © 2018 Created by AudrenGuillaume</Fo>
  </Layout>
);

export default Footer;


// <section>This project is licensed under the MIT license.</section>
// <section>Made with <span role="img" aria-label="heart-emoji">❤️</span> by Audren Guillaume</section>
