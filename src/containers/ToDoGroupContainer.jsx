import { connect } from "react-redux";
import ToDoGroup from "../components/ToDoGroup";
import { initToDos } from "../action"

const mapStateToProps = (state) => ({
    toDoList: state.toDoList
})

const mapDispatchToProps = (dispatch) => ({
    initToDoList: (todos) => { dispatch(initToDos(todos)) }
})

const ToDoGroupContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoGroup);

export default ToDoGroupContainer;