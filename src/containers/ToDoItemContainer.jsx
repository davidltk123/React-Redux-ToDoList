import { connect } from "react-redux";
import { deleteToDo, updateToDo } from "../action";
import ToDoItem from "../components/ToDoItem";

const mapDispatchToProps = (dispatch) => ({
    deleteToDo: (id) => { dispatch(deleteToDo(id)) },
    updateToDo: (todo) => { dispatch(updateToDo(todo)) }
});

const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem);

export default ToDoItemContainer;