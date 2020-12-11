import React, { Component } from 'react';
import { Menu, Dropdown, Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { updateToDo } from "../apis/todos"
import { getLabelList } from '../apis/labels';
import LabelItemContainer from '../containers/LabelItemContainer';

class LabelGenerator extends Component {

    componentDidMount() {
        getLabelList().then(response => {
            this.props.initLabels(response.data);
        });
    }

    addLabelToTodo = (newLabel) => {
        const { todo } = this.props;
        const labelIds = todo.labels.map(label => label.id);
        updateToDo(todo.id, { ...todo, labelIds: [...labelIds, newLabel.id] }).then((response) => {
            this.props.updateToDo(response.data);
        })
    }

    removeLabelFromTodo = (removeLabel) => {
        const { todo } = this.props;
        const filteredLabels = todo.labels.filter(label => label !== removeLabel);
        const filteredLabelIds = filteredLabels.map(label => label.id);
        updateToDo(todo.id, { ...todo, labelIds: [...filteredLabelIds] }).then((response) => {
            this.props.updateToDo(response.data);
        })
    }

    render() {
        const menuItems = this.props.labelList.map(label =>
            <Menu.Item key={label.id} onClick={() => { this.addLabelToTodo(label)}} >{label.content}</Menu.Item>
        );
    
        const menu = (
            <Menu>
                {menuItems}
            </Menu>
        );

        const labelItems = this.props.todo.labels.map(label =>
            <LabelItemContainer key={label.id} label={label} remove={this.removeLabelFromTodo}/>
        );

        return (
            <>
            
                {labelItems}
                <Space direction="vertical">
                    <Space wrap>
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <Button className="addButton" type="primary" icon={<PlusOutlined />} />
                        </Dropdown>
                    </Space>
                </Space>
            
            </>
        )
    }

}

export default LabelGenerator;