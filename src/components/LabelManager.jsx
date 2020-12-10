import React, { Component } from 'react';
import { getLabelList } from '../apis/labels';
import LabelItemContainer from '../containers/LabelItemContainer';

class LabelManager extends Component {
    componentDidMount() {
        getLabelList().then(response => {
            this.props.initLabels(response.data);
        });
    }

    render() {
        const { labelList } = this.props;

        return (
            <div>
                {
                    labelList.map(value =>
                        // <div>{value.content} {value.color}</div>
                        <LabelItemContainer key={value.id} label={value} />
                    )
                }
            </div>
        );
    }
}

export default LabelManager;