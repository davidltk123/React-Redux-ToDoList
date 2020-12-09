import { ADD_TO_DO, DELETE_TO_DO, TOGGLE_COMPLETE, INIT_TODOS} from './actionType';

export const addToDo = (todo) => ({
    type: ADD_TO_DO,
    payload: todo
})

export const deleteToDo = (id) => ({
    type: DELETE_TO_DO,
    payload: id
})

export const toggleComplete = (id) => ({
    type: TOGGLE_COMPLETE,
    payload: id
})

export const initToDos = (todos) => ({
    type: INIT_TODOS,
    payload: todos
})

