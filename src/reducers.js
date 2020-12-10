import { ADD_TO_DO, DELETE_TO_DO, INIT_TODOS, UPDATE_TODO } from './actionType'
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

export default combineReducers(
    {
        toDoList
    }
)