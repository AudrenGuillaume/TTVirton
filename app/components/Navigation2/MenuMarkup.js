import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import 'ant.less';

const MenuMarkup = ({ mobileVersion, activeLinkKey, onLinkClick, className }) => (
    <Menu
        theme={mobileVersion ? 'light' : 'dark'}
        mode={mobileVersion ? 'vertical' : 'horizontal'}
        selectedKeys={[`${activeLinkKey}`]}
        className={className}
    >
        <Menu.Item key='/'><Link onClick={onLinkClick} to='/'>Home</Link></Menu.Item>
        <Menu.Item key='/about'><Link onClick={onLinkClick} to='/about'>About</Link></Menu.Item>
        <Menu.Item key='/topics'><Link onClick={onLinkClick} to='/topics'>Topics</Link></Menu.Item>
    </Menu>
);

MenuMarkup.propTypes = {
    mobileVersion: PropTypes.bool,
    activeLinkKey: PropTypes.string.isRequired,
    onLinkClick: PropTypes.func,
    className: PropTypes.string,
};

MenuMarkup.defaultProps = {
    mobileVersion: false,
    className: 'mobile-navigation',
};

export default MenuMarkup;