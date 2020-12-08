import { connect } from "react-redux";
import { deleteToDo } from "../action";
import ToDoItem from "../components/ToDoItem";

const mapDispatchToProps = (dispatch) => ({
    deleteToDo: (id) => { dispatch(deleteToDo(id)) }
});

const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem);

export default ToDoItemContainer;