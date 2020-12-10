import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';
import { getToDoList } from '../apis/todos';
import { List, Divider } from 'antd';

class ToDoGroup extends Component {

    componentDidMount() {
        getToDoList().then(response => {
            this.props.initToDoList(response.data);
        });
    }

    render() {
        const { toDoList, labelList } = this.props;
        return (
            // <div>
            //     {
            //         toDoList.map(value =>
            //             <ToDoItemContainer key={value.id} todo={value} />
            //         )
            //     }
            // </div>


            <div className="toDoList">
                <Divider id="testing">To Do List</Divider>
                <List
                    bordered
                    dataSource={toDoList}
                    renderItem={item => (
                        <List.Item>
                            { <ToDoItemContainer key={item.id} todo={item} />}
                        </List.Item>
                    )}
                />
            </div>


        );
    }
}

export default ToDoGroup;