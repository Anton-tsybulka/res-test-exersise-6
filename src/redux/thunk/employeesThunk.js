import axios from 'axios';
import {
    getEmployees,
    getEmployeesSuccess,
    addEmployees,
    addEmployeesSuccess,
    deleteEmployees,
    deleteEmployeesSuccess,
    employeesFailed,
} from '../actions/employeesActions';

const apiUrl = 'https://reqres.in/api/users?per_page=12';

export const getEmployeesThunk = (data) => {
    return (dispatch) => {
        dispatch(getEmployees(data));
        axios.get(apiUrl)
            .then((responce) => {
                dispatch(getEmployeesSuccess(responce.data.data))
            })
            .catch((error) => {
                dispatch(employeesFailed(error))
            })
    };
};

export const addEmployeesThunk = (data) => {
    return (dispatch) => {
        dispatch(addEmployees(data));
        //axios.post
        console.log(`Запрос на добавление сотрудника ${data.first_name} ${data.last_name} с почтой ${data.email} отправлен!`);
        dispatch(addEmployeesSuccess(null));
    };
};

export const deleteEmployeesThunk = (data) => {
    return (dispatch) => {
        dispatch(deleteEmployees(data));
        //axios.dalete
        console.log(`Запрос на удаление сотрудника №${data} отправлен!`);
        dispatch(deleteEmployeesSuccess(null));
    };
};
