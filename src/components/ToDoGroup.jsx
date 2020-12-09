import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';
import {getToDoList} from '../apis/todos';

class ToDoGroup extends Component {
    
    componentDidMount() {
        getToDoList().then(response => {
            this.props.initToDoList(response.data);
        });
    }

    render() {
        const {toDoList} = this.props;
        return (
            <div>
                {
                    toDoList.map(value =>
                        <ToDoItemContainer key={value.id} todo={value} />
                    )
                }
            </div>
        );
    }
}

export default ToDoGroup;