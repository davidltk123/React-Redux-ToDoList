import { connect } from "react-redux";
import { initLabels, addLabel } from "../action";
import LabelManager from "../components/LabelManager";

const mapStateToProps = (state) => ({
    labelList: state.labelList
})

const mapDispatchToProps = (dispatch) => ({
    initLabels: (labels) => { dispatch(initLabels(labels)) },
    addLabel: (label) => { dispatch(addLabel(label)) },
})

const LabelManagerContainer = connect(mapStateToProps, mapDispatchToProps)(LabelManager);

export default LabelManagerContainer;