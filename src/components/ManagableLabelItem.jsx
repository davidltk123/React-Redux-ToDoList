import React, { Component } from 'react';
import { Card, Button, Modal, Input, Badge, notification  } from 'antd';
import { DeleteOutlined, SmileOutlined } from '@ant-design/icons';

class ManagableLabelItem extends Component {
    
    render() {
        const gridStyle = {
            width: '100%',
            textAlign: 'center'
        };

        const {label, openModal, removeLabel} = this.props;

        return (
            <Card.Grid hoverable={false} key={label.id} style={gridStyle}>{label.content}
                <Badge className="badge" color={label.color} />
                <Button className="LabelManagerAddButon" type="primary" onClick={() => openModal(true, label)}>edit</Button>
                <Button className="LabelManagerDeleteButon" type="primary" icon={<DeleteOutlined />} onClick={() => { removeLabel(label) }} />
            </Card.Grid >
        );
    }
}

export default ManagableLabelItem;