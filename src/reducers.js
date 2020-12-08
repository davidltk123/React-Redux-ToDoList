import { ADD_TO_DO } from './actionType'
import { v4 as uuidv4 } from 'uuid';
import { combineReducers } from "redux";

const toDoList = (state = [], action) => {
    switch(action.type){
        case ADD_TO_DO:
            return [...state, { id: uuidv4(), content: action.payload, complete: false }];
        default:
            return state;
    }
}

export default combineReducers(
    {
        toDoList
    }
)