import { ADD_TO_DO, DELETE_TO_DO, TOGGLE_COMPLETE, INIT_TODOS } from './actionType'
import { combineReducers } from "redux";

const toDoList = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return [...state, action.payload];
        case DELETE_TO_DO:
            return state.filter((todo) => todo.id !== action.payload);
        case TOGGLE_COMPLETE:
            return state.map((todo) => {
                return action.payload === todo.id ? { ...todo, complete: !todo.complete } : todo;
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