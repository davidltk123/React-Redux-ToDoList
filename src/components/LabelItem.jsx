import React, { Component } from 'react';
import { Tag } from 'antd';
class LabelItem extends Component {

    handleClose = () => {
        this.props.remove(this.props.label);
    }

    render() {
        const { content, color } = this.props.label;
        return (
            <div><Tag closable color={color}  onClose={this.handleClose}>{content}</Tag></div>
        );
    }
}

export default LabelItem;