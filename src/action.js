import { ADD_TO_DO, DELETE_TO_DO, TOGGLE_COMPLETE, INIT_TODOS, ADD_LABEL, REMOVE_LABEL} from './actionType';

export const addToDo = (todo) => ({
    type: ADD_TO_DO,
    payload: todo
})

export const deleteToDo = (id) => ({
    type: DELETE_TO_DO,
    payload: id
})

export const toggleComplete = (todo) => ({
    type: TOGGLE_COMPLETE,
    payload: todo
})

export const initToDos = (todos) => ({
    type: INIT_TODOS,
    payload: todos
})

export const addLabel = (todos) => ({
    type: ADD_LABEL,
    payload: todos
})

export const removeLabel = (todos) => ({
    type: REMOVE_LABEL,
    payload: todos
})


