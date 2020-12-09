import { connect } from 'react-redux';
import { removeLabel } from "../action";
import Label from "../components/Label";

const mapDispatchToProps = (dispatch) => ({
    removeLabel: (todo) => {dispatch(removeLabel(todo))}
})

const LabelContainer = connect(null, mapDispatchToProps)(Label);

export default LabelContainer;