import { ADD_TO_DO, DELETE_TO_DO, INIT_TODOS, UPDATE_TODO, INIT_LABELS, ADD_LABEL, DELETE_LABEL, UPDATE_LABEL} from './actionType';

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

//------------------------labels

export const initLabels = (labels) => ({
    type: INIT_LABELS,
    payload: labels
})

export const addLabel = (label) => ({
    type: ADD_LABEL,
    payload: label
})

export const deleteLabel = (id) => ({
    type: DELETE_LABEL,
    payload: id 
})

export const updateLabel = (label) => ({
    type: UPDATE_LABEL,
    payload: label
})





