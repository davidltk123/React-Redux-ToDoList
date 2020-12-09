import React, { Component } from 'react';
import { List, Divider } from 'antd';
import LabelGroupContainer from '../containers/LabelGroupContainer';

class DoneList extends Component {
    render() {
        const { doneList } = this.props;
        return (
            <div className="doneList">
                <Divider id="testing">Done List</Divider>
                <List
                    bordered
                    dataSource={doneList}
                    renderItem={item => (
                        <List.Item>
                            <div>{item.content}</div>
                            <div>{<LabelGroupContainer todo={item} />}</div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default DoneList;