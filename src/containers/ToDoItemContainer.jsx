import { connect } from "react-redux";
import { deleteToDo, toggleComplete } from "../action";
import ToDoItem from "../components/ToDoItem";

const mapDispatchToProps = (dispatch) => ({
    deleteToDo: (id) => { dispatch(deleteToDo(id)) },
    toggleComplete: (todo) => { dispatch(toggleComplete(todo)) }
});

const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem);

export default ToDoItemContainer;