import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import EmployeesForm from './EmployeesForm';

const AddEmployees = () => {
    const [isModalVisible, changeModal] = useState(false);
    return (
        <>
            <Button
                type='primary'
                onClick={() => changeModal(!isModalVisible)}>
                Добавить сотрудника
            </Button>
            <Modal
                title='Добавить сотрудника'
                width={1000}
                visible={isModalVisible}
                onCancel={() => changeModal(!isModalVisible)}
                footer={null}>
                <EmployeesForm
                    changeModal={changeModal}
                    isModalVisible={isModalVisible} />
            </Modal>
        </>
    );
};

export default AddEmployees;