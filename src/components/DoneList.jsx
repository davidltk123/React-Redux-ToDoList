import React, { Component } from 'react';
import { List, Divider } from 'antd';

class DoneList extends Component {
    render() {
        const { doneList } = this.props;
        return (
            // <div>
            //     <h2>Done List</h2>
            //     <ul>
            //         {
            //             doneList.map((todo, index) => (
            //                 <li key={index}>{todo.content}</li>
            //             ))
            //         }
            //     </ul>
            // </div>


            <div className="doneList">
                <Divider id="testing">Done List</Divider>
                <List
                    bordered
                    dataSource={doneList}
                    renderItem={item => (
                        <List.Item>
                            {item.content}
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default DoneList;