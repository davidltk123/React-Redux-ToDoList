import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

class ManagableLabelItem extends Component {
    render() {
        const gridStyle = {
            width: '100%',
            textAlign: 'center'
        };

        return (
            this.props.labels.map(label =>
                <Card.Grid key={label.id} style={gridStyle}>{label.content}
                    <Button className="LabelManagerAddButon" type="primary" onClick={this.addLabel} >add</Button>
                    <Button className="deleteButton" type="primary" icon={<DeleteOutlined />} />
                </Card.Grid >
            )
        );
    }
}

export default ManagableLabelItem;