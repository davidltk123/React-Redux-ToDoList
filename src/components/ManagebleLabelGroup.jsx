import React, { Component } from 'react';
import { Card, Button, Modal, Input, Badge, notification  } from 'antd';
import { DeleteOutlined, SmileOutlined } from '@ant-design/icons';
import { deleteLabel, updateLabel } from "../apis/labels";
import ManagableLabelItem from "../components/ManagableLabelItem";

class ManagebleLabelGroup extends Component {

    state = {
        modalVisible: false,
        content: '',
        color: '#ff0000',
        selectedLabel: null
    };

    setModalVisible = (modalVisible, label) => {
        this.setState({ modalVisible: modalVisible,  selectedLabel:label});
    }

    removeLabel = (label) => {
        deleteLabel(label.id).then(() => {
            this.props.deleteLabel(label.id)
        })
    }

    handleOk = () => {
        const label = this.state.selectedLabel;
        const updatedLabel = {id: label.id, content: this.state.content, color:this.state.color};
        updateLabel(label.id, updatedLabel).then(response =>{
            this.setState({ modalVisible: false});
            this.props.updateLabel(response.data);
        })
    }

    handleCancel = () => {
        this.setState({ modalVisible: false});
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

    openNotification = () => {
        notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };

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
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Input style={{width: '80%'}} value={this.state.content} placeholder="Input your label here..." onChange={this.onTextChange}/>
                    <input style={{height: '30px', marginLeft: '20px'}} value={this.state.color} type="color" onChange={this.onColorChange}/>
                </Modal>


                {this.props.labels.map(label =>
                    <ManagableLabelItem label={label} openModal={this.setModalVisible} removeLabel={this.removeLabel}/>
                )}
            </>
        );
    }
}

export default ManagebleLabelGroup;