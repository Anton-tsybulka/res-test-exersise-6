import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';

import { addEmployeesThunk } from '../redux/thunk/employeesThunk';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};

const EmployeesForm = ({ changeModal, isModalVisible }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    changeModal(!isModalVisible);
    dispatch(addEmployeesThunk(values));
  };


  return (
    <Form {...layout}
      form={form}
      name='control-hooks'
      onFinish={(e) => onFinish(e)}>
      <Form.Item
        name='first_name'
        label='Имя'>
        <Input />
      </Form.Item>
      <Form.Item
        name='last_name'
        label='Фамилия'>
        <Input />
      </Form.Item>
      <Form.Item
        name='email'
        label='Почта'>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'>
          Готово
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EmployeesForm;