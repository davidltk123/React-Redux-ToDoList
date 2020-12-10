import React, { Component } from 'react';
import { deleteTodo, updateToDo } from "../apis/todos"
import { Button } from 'antd';
import { DeleteOutlined  } from '@ant-design/icons';
import LabelGeneratorContainer from '../containers/LabelGeneratorContainer';

class ToDoItem extends Component {

    deleteToDo = () => {
        deleteTodo(this.props.todo.id).then((response) => {
            this.props.deleteToDo(response.data.id);
        });
    }

    toggleComplete = () => {
        updateToDo(this.props.todo.id, {...this.props.todo, complete: !this.props.todo.complete }).then((response) => {
            this.props.updateToDo(response.data);
        })
    }

    render() {
        return (
            <div>
                <span onClick={this.toggleComplete} style={this.props.todo.complete ? { textDecoration: "line-through" } : {}}>{this.props.todo.content}</span>
                <Button className="deleteButton" type="primary" icon={<DeleteOutlined />} onClick={this.deleteToDo}/>
                <div className="labelGenerator"><LabelGeneratorContainer todo={this.props.todo}/></div>
            </div>
        );
    }
}

export default ToDoItem;