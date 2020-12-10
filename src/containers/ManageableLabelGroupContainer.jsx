import { connect } from "react-redux";
import { deleteLabel, updateLabel } from "../action";
import ManagebleLabelGroup from "../components/ManagebleLabelGroup";

const mapDispatchToProps = (dispatch) => ({
    deleteLabel: (label) => { dispatch(deleteLabel(label)) },
    updateLabel: (label) => { dispatch(updateLabel(label)) },
})

const ManagebleLabelGroupContainer = connect(null, mapDispatchToProps)(ManagebleLabelGroup);

export default ManagebleLabelGroupContainer;