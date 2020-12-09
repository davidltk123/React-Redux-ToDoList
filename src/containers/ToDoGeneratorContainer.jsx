import { connect } from "react-redux";
import { addToDo } from "../action"
import ToDoGenerator from "../components/ToDoGenerator";

const mapDispatchToProps = (dispatch) => ({
    addToDo: (todoItem) => {dispatch(addToDo(todoItem))}
})

const ToDoGeneratorContainer = connect(null, mapDispatchToProps)(ToDoGenerator);

export default ToDoGeneratorContainer;