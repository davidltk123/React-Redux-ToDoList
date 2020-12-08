import React, { Component } from 'react';

class ToDoItem extends Component {
    render() {
        return (
            <div>
                <span>{this.props.todo.content}</span>
                <button>x</button>
            </div>
        );
    }
}

export default ToDoItem;