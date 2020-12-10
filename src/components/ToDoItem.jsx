import React, { Component } from 'react';
import { deleteTodo, updateToDo } from "../apis/todos"
import { Button } from 'antd';
import { DeleteOutlined  } from '@ant-design/icons';
import LabelGeneratorContainer from '../containers/LabelGeneratorContainer';

class ToDoItem extends Component {

    deleteToDo = () => {
        deleteTodo(this.props.todo.id).then(() => {
            this.props.deleteToDo(this.props.todo.id);
        });
    }

    toggleComplete = () => {
        const {todo} = this.props;
        updateToDo(todo.id, {...todo, complete: !todo.complete, labelIds: todo.labels.map(label=>label.id) }).then((response) => {
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