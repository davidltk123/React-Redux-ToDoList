import React, { Component } from 'react';
import ToDoGroupContainer from "../containers/ToDoGroupContainer";
import ToDoGeneratorContainer from "../containers/ToDoGeneratorContainer";

class ToDoList extends Component {
    render() {
        return (
            <div>
                <ToDoGroupContainer />
                <ToDoGeneratorContainer />
            </div>
        );
    }
}

export default ToDoList;