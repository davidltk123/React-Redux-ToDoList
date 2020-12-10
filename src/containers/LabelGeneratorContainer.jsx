import { connect } from 'react-redux';
import { updateToDo, initLabels } from "../action";
import LabelGroup from "../components/LabelGenerator";

const mapDispatchToProps = (dispatch) => ({
    updateToDo: (todo) => {dispatch(updateToDo(todo))},
    initLabels: (labels) => { dispatch(initLabels(labels)) },
})

const mapStateToProps = (state) => ({
    labelList: state.labelList,
})

const LabelGroupContainer = connect(mapStateToProps, mapDispatchToProps)(LabelGroup);

export default LabelGroupContainer;