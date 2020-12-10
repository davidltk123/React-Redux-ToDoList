import React, { Component } from 'react';
import { Card, Button, Modal, Input } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { deleteLabel, updateLabel } from "../apis/labels"

class ManagebleLabelGroup extends Component {

    state = {
        modalVisible: false,
        content: '',
        color: '#ff0000'
    };

    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    removeLabel = (label) => {
        deleteLabel(label.id).then(() => {
            this.props.deleteLabel(label.id)
        })
    }

    handleOk = () => {
        this.setModalVisible(true);
    }

    handleCancel = () => {
        this.setModalVisible(false);
    }

    onTextChange = (event) => {
        this.setState({
            content: event.target.value,
        });
    }

    onColorChange = (event) => {
        this.setState({
            color: event.target.value,
        });
    }

    render() {

        const gridStyle = {
            width: '100%',
            textAlign: 'center'
        };

        return (
            <>
                <Modal
                    title="Edit Label"
                    centered
                    visible={this.state.modalVisible}
                    onOk={() => this.setModalVisible(false)}
                    onCancel={() => this.setModalVisible(false)}
                >
                    <Input style={{width: '80%'}} value={this.state.content} placeholder="Input your label here..." onChange={this.onTextChange} />
                    <input style={{height: '30px', marginLeft: '20px'}} value={this.state.color} type="color" onChange={this.onColorChange}/>
                </Modal>


                {this.props.labels.map(label =>
                    <Card.Grid key={label.id} style={gridStyle}>{label.content}
                        <Button className="LabelManagerAddButon" type="primary" onClick={() => this.setModalVisible(true)}>add</Button>
                        <Button className="deleteButton" type="primary" icon={<DeleteOutlined />} onClick={() => { this.removeLabel(label) }} />
                    </Card.Grid >
                )}
            </>
        );
    }
}

export default ManagebleLabelGroup;