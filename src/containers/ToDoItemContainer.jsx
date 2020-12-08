import { connect } from "react-redux";
import { deleteToDo, toggleComplete } from "../action";
import ToDoItem from "../components/ToDoItem";

const mapDispatchToProps = (dispatch) => ({
    deleteToDo: (id) => { dispatch(deleteToDo(id)) },
    toggleComplete: (id) => { dispatch(toggleComplete(id)) }
});

const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem);

export default ToDoItemContainer;