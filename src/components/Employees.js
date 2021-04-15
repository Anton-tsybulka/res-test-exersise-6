import React from 'react';
import { useDispatch } from 'react-redux';
import { Table, Popconfirm, Space } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';

import AddEmployees from './AddEmployees';
import { deleteEmployeesThunk } from '../redux/thunk/employeesThunk';


const Employees = ({ data }) => {
    const dispatch = useDispatch();
    const columns = [
        {
            title: 'Номер',
            dataIndex: 'id',
        },
        {
            title: 'Имя',
            dataIndex: 'first_name',
        },
        {
            title: 'Фамилия',
            dataIndex: 'last_name',
        },
        {
            title: 'Почта',
            dataIndex: 'email',
        },
        {
            title: 'Действие',
            dataIndex: 'operation',
            render: (text, record) => (
                <Space size="middle">
                    <Popconfirm
                        title='Хотите удалить?'
                        okText='Да'
                        cancelText='Нет'
                        onConfirm={() => dispatch(deleteEmployeesThunk(record.id))}
                    >
                        <DeleteTwoTone />
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <AddEmployees />
            <Table
                columns={columns}
                dataSource={data}
                size='small'
                pagination={false} />
        </div>
    )
};

export default Employees;