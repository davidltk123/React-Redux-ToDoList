import { ADD_TO_DO, DELETE_TO_DO, INIT_TODOS, UPDATE_TODO, INIT_LABELS, ADD_LABEL, DELETE_LABEL, UPDATE_LABEL } from './actionType'
import { combineReducers } from "redux";

const toDoList = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return [...state, action.payload];
        case DELETE_TO_DO:
            return state.filter((todo) => todo.id !== action.payload);
        case UPDATE_TODO:
            return state.map((todo) => {
                return action.payload.id === todo.id ? action.payload : todo;
            });
        case INIT_TODOS:
            return action.payload;
        default:
            return state;
    }
}

const labelList = (state = [], action) => {
    switch (action.type) {
        case ADD_LABEL:
            return [...state, action.payload];
        case DELETE_LABEL:
            return state.filter((label) => label.id !== action.payload);
        case UPDATE_LABEL:
            return state.map((label) => {
                return action.payload.id === label.id ? action.payload : label;
            });
        case INIT_LABELS:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers(
    {
        toDoList, labelList
    }
)