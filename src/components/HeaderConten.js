import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import getValue from './helpers';

const { Header } = Layout;

const HeaderConten = ({ history: { location: { pathname } } }) => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={getValue(pathname)}>
        <Menu.Item key='1'><Link to='/'>Главная</Link></Menu.Item>
        <Menu.Item key='2'><Link to='/employees'>Сотрудники</Link></Menu.Item>
      </Menu>
    </Header>
  );
};

export default withRouter(HeaderConten);