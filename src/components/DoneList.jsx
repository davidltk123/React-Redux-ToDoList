import React, { Component } from 'react';

class DoneList extends Component {
    render() {
        const { doneList } = this.props;
        return (
            <div>
                <h2>Done List</h2>
                <ul>
                    {
                        doneList.map((todo, index) => (
                            <li key={index}>{todo.content}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default DoneList;