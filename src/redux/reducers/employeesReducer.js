import {
    GET_EMPLOYEES_REQUESTED,
    GET_EMPLOYEES_SUCCESS,
    ADD_EMPLOYEES_REQUESTED,
    ADD_EMPLOYEES_SUCCESS,
    DELETE_EMPLOYEES_REQUESTED,
    DELETE_EMPLOYEES_SUCCESS,
    EMPLOYEES_FAILED
} from '../actions/actionTypes';

const initialState = {
    loading: true,
    employees: [],
    error: null
};

export default function employeesReducer(state = initialState, action) {

    switch (action.type) {
        case GET_EMPLOYEES_REQUESTED:
            return { ...state };
        case GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: [...state.employees, ...action.payload]
            };
        case ADD_EMPLOYEES_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case ADD_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                //employees: [...state.employees, ...action.payload]
            };
        case DELETE_EMPLOYEES_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case DELETE_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                //employees: [...state.employees.filter(({ id }) => id !== action.payload)]
            };
        case EMPLOYEES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            };

        default:
            return state;
    }
};