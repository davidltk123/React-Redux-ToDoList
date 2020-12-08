import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoGroup extends Component {
    render() {
        return (
            <div>
                {
                    this.props.toDoList.map(value =>
                        <ToDoItem key={value.id} todo={value} />
                    )
                }
            </div>
        );
    }
}

export default ToDoGroup;