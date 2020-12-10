import { ADD_TO_DO, DELETE_TO_DO, INIT_TODOS, UPDATE_TODO} from './actionType';

export const addToDo = (todo) => ({
    type: ADD_TO_DO,
    payload: todo
})

export const deleteToDo = (id) => ({
    type: DELETE_TO_DO,
    payload: id
})

export const initToDos = (todos) => ({
    type: INIT_TODOS,
    payload: todos
})

export const updateToDo = (todos) => ({
    type: UPDATE_TODO,
    payload: todos
})



