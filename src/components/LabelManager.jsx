import React, { Component } from 'react';
import { getLabelList } from '../apis/labels';

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
                    <div>{value.content} {value.color}</div>
                        // <ToDoItemContainer key={value.id} todo={value} />
                    )
                }
            </div>
        );
    }
}

export default LabelManager;