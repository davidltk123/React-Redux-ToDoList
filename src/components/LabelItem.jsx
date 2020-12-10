import React, { Component } from 'react';
import { Tag } from 'antd';
import { deleteLabel, updateLabel } from "../apis/labels"
class LabelItem extends Component {

    handleClose = () => {
        deleteLabel(this.props.label.id).then((response) => {
            this.props.deleteLabel(response.data.id);
        });
    }

    render() {
        console.log(this.props.label)
        const { content, color } = this.props.label;
        return (
            <div><Tag closable color={color}  onClose={this.handleClose}>{content}</Tag></div>
        );
    }
}

export default LabelItem;