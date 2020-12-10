import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { deleteLabel, updateLabel } from "../apis/labels"

class ManagableLabelItem extends Component {

    removeLabel = (label) => {
        deleteLabel(label.id).then(() => {
            this.props.deleteLabel(label.id)
        })
    }

    render() {
        const gridStyle = {
            width: '100%',
            textAlign: 'center'
        };

        return (
            this.props.labels.map(label =>
                <Card.Grid key={label.id} style={gridStyle}>{label.content}
                    <Button className="LabelManagerAddButon" type="primary" >add</Button>
                    <Button className="deleteButton" type="primary" icon={<DeleteOutlined />} onClick={()=>{this.removeLabel(label)}}/>
                </Card.Grid >
            )
        );
    }
}

export default ManagableLabelItem;