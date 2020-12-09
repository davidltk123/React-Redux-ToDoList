import { connect } from "react-redux";
import DoneList from "../components/DoneList";

const mapStateToProps = (state) => ({
    doneList: state.toDoList.filter((todo)=>todo.complete)
})

const DoneToDoListContainer = connect(mapStateToProps, null)(DoneList);

export default DoneToDoListContainer;