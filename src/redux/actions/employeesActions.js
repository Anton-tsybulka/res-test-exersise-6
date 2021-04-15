import {
    GET_EMPLOYEES_REQUESTED,
    GET_EMPLOYEES_SUCCESS,
    ADD_EMPLOYEES_REQUESTED,
    ADD_EMPLOYEES_SUCCESS,
    DELETE_EMPLOYEES_REQUESTED,
    DELETE_EMPLOYEES_SUCCESS,
    EMPLOYEES_FAILED,
} from './actionTypes';

export const getEmployees = (data) => {
    return {
        type: GET_EMPLOYEES_REQUESTED,
        payload: data,
    };
};

export const getEmployeesSuccess = (data) => {
    return {
        type: GET_EMPLOYEES_SUCCESS,
        payload: data
    };
};

export const addEmployees = (data) => {
    return {
        type: ADD_EMPLOYEES_REQUESTED,
        payload: data
    };
};

export const addEmployeesSuccess = (data) => {
    return {
        type: ADD_EMPLOYEES_SUCCESS,
        payload: data
    };
};

export const deleteEmployees = (data) => {
    return {
        type: DELETE_EMPLOYEES_REQUESTED,
        payload: data
    };
};

export const deleteEmployeesSuccess = (data) => {
    return {
        type: DELETE_EMPLOYEES_SUCCESS,
        payload: data
    };
};

export const employeesFailed = (data) => {
    return {
        type: EMPLOYEES_FAILED,
        payload: data
    };
};