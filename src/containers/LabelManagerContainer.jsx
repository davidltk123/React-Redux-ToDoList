import { connect } from "react-redux";
import { initLabels } from "../action";
import LabelManager from "../components/LabelManager";

const mapStateToProps = (state) => ({
    labelList: state.labelList
})

const mapDispatchToProps = (dispatch) => ({
    initLabels: (labels) => { dispatch(initLabels(labels)) }
})

const LabelManagerContainer = connect(mapStateToProps,mapDispatchToProps)(LabelManager);

export default LabelManagerContainer;