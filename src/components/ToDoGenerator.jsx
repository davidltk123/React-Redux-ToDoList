import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {addNewToDo} from "../apis/todos"
class ToDoGenerator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '',
        }
    }

    onChange = (event) => {
        this.setState({
            content: event.target.value,
        });
    }

    addToDo = () => {
        addNewToDo(this.state.content).then(response => {
            this.props.addToDo(response.data);
        });
        this.setState({
            content: '',
        });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.content} onChange={this.onChange} placeholder="input a new todo here..."/>
                <button onClick={this.addToDo} >add</button>
            </div>
        );
    }
}

export default ToDoGenerator;