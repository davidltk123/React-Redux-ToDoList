import { connect } from "react-redux";
import { deleteLabel, updateLabel } from "../action";
import ManagableLabelItem from "../components/ManagableLabelItem";

const mapDispatchToProps = (dispatch) => ({
    deleteLabel: (label) => { dispatch(deleteLabel(label)) },
    updateLabel: (label) => { dispatch(updateLabel(label)) },
})

const ManagableLabelItemContainer = connect(null, mapDispatchToProps)(ManagableLabelItem);

export default ManagableLabelItemContainer;