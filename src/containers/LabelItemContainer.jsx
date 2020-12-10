import { connect } from "react-redux";
import { deleteLabel, updateLabel } from "../action";
import LabelItem from "../components/LabelItem";

const mapDispatchToProps = (dispatch) => ({
    deleteLabel: (label) => { dispatch(deleteLabel(label)) },
    updateLabel: (label) => { dispatch(updateLabel(label)) },
})

const LabelItemContainer = connect(null, mapDispatchToProps)(LabelItem);

export default LabelItemContainer;