import { ADD_TO_DO, DELETE_TO_DO, TOGGLE_COMPLETE} from './actionType';

export const addToDo = (content) => ({
    type: ADD_TO_DO,
    payload: content
})

export const deleteToDo = (id) => ({
    type: DELETE_TO_DO,
    payload: id
})

export const toggleComplete = (id) => ({
    type: TOGGLE_COMPLETE,
    payload: id
})