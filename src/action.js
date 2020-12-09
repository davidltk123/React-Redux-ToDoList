import { ADD_TO_DO, DELETE_TO_DO, TOGGLE_COMPLETE, INIT_TODOS, UPDATE_LABELS} from './actionType';

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

export const updateLabels = (todos) => ({
    type: UPDATE_LABELS,
    payload: todos
})



