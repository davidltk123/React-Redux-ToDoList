import { connect } from 'react-redux';
import { updateToDo } from "../action";
import LabelGroup from "../components/LabelGenerator";

const mapDispatchToProps = (dispatch) => ({
    updateToDo: (todo) => {dispatch(updateToDo(todo))}
})

const LabelGroupContainer = connect(null, mapDispatchToProps)(LabelGroup);

export default LabelGroupContainer;