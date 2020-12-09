import React, { Component } from 'react';
import {deleteTodo} from "../apis/todos"

class ToDoItem extends Component {

    deleteToDo = () => {
        deleteTodo(this.props.todo.id).then(()=>{
            this.props.deleteToDo(this.props.todo.id);
        });
    }

    toggleComplete = () => {
        this.props.toggleComplete(this.props.todo.id);
    }

    render() {
        return (
            <div>
                <span onClick={this.toggleComplete} style={this.props.todo.complete ? { textDecoration: "line-through" } : {}}>{this.props.todo.content}</span>
                <button onClick={this.deleteToDo}>x</button>
            </div>
        );
    }
}

export default ToDoItem;