import React, { Component } from 'react';
import ToDoGroupContainer from "../containers/ToDoGroupContainer";
import ToDoGeneratorContainer from "../containers/ToDoGeneratorContainer";

class ToDoList extends Component {
    render() {
        return (
            <div>
                <h1>ToDoList</h1>
                <ToDoGroupContainer />
                <ToDoGeneratorContainer />
            </div>
        );
    }
}

export default ToDoList;