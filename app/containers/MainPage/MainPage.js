import React, { Component } from 'react';
import {Layout} from 'antd';

const { Header, Content } = Layout;
import './main.less';

class MainPage extends Component {
    componentDidMount() {
        let elem = document.querySelector('body');
        <elem className='banner-page'/>
      }
    
      componentWillUnmount() {
        let elem = document.querySelector('body');
        removeClass(elem, 'banner-page');
      }
    render() {

    return ( <div>okok</div> );
    }
}
export default MainPage;

