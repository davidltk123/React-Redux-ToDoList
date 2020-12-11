import React, { Component } from 'react';
import { Tag, Tooltip } from 'antd';
class LabelItem extends Component {

    handleClose = () => {
        this.props.remove(this.props.label);
    }

    render() {
        const { content, color } = this.props.label;

        const isLongTag = content.length > 20;

        const tagElem = <Tag closable color={color}  onClose={this.handleClose}>{isLongTag ? `${content.slice(0, 20)}...` : content}</Tag>;
    
        return isLongTag ? (
            <Tooltip title={content} >
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
    }
}

export default LabelItem;