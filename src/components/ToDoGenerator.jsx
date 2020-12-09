import React, { Component } from 'react';
import { addNewToDo } from "../apis/todos"
import { Button, Input } from 'antd';
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
            <div className="toDoGenerator">
                <Input id="myinput" placeholder="input a new todo here..." value={this.state.content} allowClear onChange={this.onChange} />
                <Button type="primary" onClick={this.addToDo} >add</Button>
            </div>
        );
    }
}

export default ToDoGenerator;