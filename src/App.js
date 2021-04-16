import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import { getEmployeesThunk } from './redux/thunk/employeesThunk';
import { HeaderConten, Home, Employees, } from './components/index';

const { Content } = Layout;

const App = () => {
  const { employees } = useSelector((state) => state.employees),
    dispatch = useDispatch();

  const data = employees &&
    employees.length !== 0 &&
    employees.map((item) => ({ ...item, key: item.id }));

  useEffect(() => {
    dispatch(getEmployeesThunk());
  }, [dispatch]);

  return (
    <Layout className='layout'>
      <HeaderConten />
      <Content className='site-layout' style={{ marginTop: 64 }}>
        <div className='site-layout-background' style={{ padding: 10 }}>
          <Switch>
            <Route
              path='/'
              component={() => <Home />}
              key='1'
              exact />
            <Route
              path='/employees'
              component={() => <Employees data={data} />}
              key='2' />
            <Redirect to='/' />
          </Switch>
        </div>
      </Content>
    </Layout>
  );
};

export default App;