import { connect } from 'react-redux';
import { addLabel,removeLabel } from "../action";
import LabelGroup from "../components/LabelGroup";

const mapDispatchToProps = (dispatch) => ({
    removeLabel: (todo) => {dispatch(removeLabel(todo))},
    addLabel: (todo) => {dispatch(addLabel(todo))},
})

const LabelGroupContainer = connect(null, mapDispatchToProps)(LabelGroup);

export default LabelGroupContainer;