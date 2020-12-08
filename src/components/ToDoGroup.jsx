import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';

class ToDoGroup extends Component {
    render() {
        return (
            <div>
                {
                    this.props.toDoList.map(value =>
                        <ToDoItemContainer key={value.id} todo={value} />
                    )
                }
            </div>
        );
    }
}

export default ToDoGroup;