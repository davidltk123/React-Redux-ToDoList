import React, { Component } from 'react';
import { deleteTodo, setComplete } from "../apis/todos"
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

class ToDoItem extends Component {

    deleteToDo = () => {
        deleteTodo(this.props.todo.id).then((response) => {
            this.props.deleteToDo(response.data.id);
        });
    }

    toggleComplete = () => {
        setComplete(this.props.todo.id, !this.props.todo.complete).then((response) => {
            this.props.toggleComplete(response.data.id);
        })
    }

    render() {
        return (
            <div>
                <span onClick={this.toggleComplete} style={this.props.todo.complete ? { textDecoration: "line-through" } : {}}>{this.props.todo.content}</span>
                <Button type="primary" icon={<CloseOutlined />} onClick={this.deleteToDo}/>
            </div>
        );
    }
}

export default ToDoItem;