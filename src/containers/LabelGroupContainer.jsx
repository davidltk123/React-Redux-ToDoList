import { connect } from 'react-redux';
import { updateLabels } from "../action";
import LabelGroup from "../components/LabelGroup";

const mapDispatchToProps = (dispatch) => ({
    updateLabels: (todo) => {dispatch(updateLabels(todo))}
})

const LabelGroupContainer = connect(null, mapDispatchToProps)(LabelGroup);

export default LabelGroupContainer;