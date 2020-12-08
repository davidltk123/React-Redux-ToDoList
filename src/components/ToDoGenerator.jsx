import React, { Component } from 'react';

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
        this.props.addToDo(this.state.content);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.content} onChange={this.onChange} />
                <button onClick={this.addToDo} >add</button>
            </div>
        );
    }
}

export default ToDoGenerator;