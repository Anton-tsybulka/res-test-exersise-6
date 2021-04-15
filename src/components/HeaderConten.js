import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HeaderConten = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key='1'><Link to='/'>Главная</Link></Menu.Item>
        <Menu.Item key='2'><Link to='/employees'>Сотрудники</Link></Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderConten;