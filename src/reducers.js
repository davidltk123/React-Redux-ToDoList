import { ADD_TO_DO, DELETE_TO_DO } from './actionType'
import { v4 as uuidv4 } from 'uuid';
import { combineReducers } from "redux";

const toDoList = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return [...state, { id: uuidv4(), content: action.payload, complete: false }];
        case DELETE_TO_DO:
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
}

export default combineReducers(
    {
        toDoList
    }
)