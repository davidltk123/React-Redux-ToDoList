import React, { Component } from 'react';
import { Tag, Input, Tooltip, Menu, Dropdown, Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { updateToDo } from "../apis/todos"

class LabelGroup extends Component {
    menu = (
        <Menu>
            <Menu.Item>
                    1st menu item
            </Menu.Item>
            <Menu.Item>
                    2nd menu item
            </Menu.Item>
            <Menu.Item>
                    3rd menu item
            </Menu.Item>
        </Menu>
    );

    render() {
        return (
            <Space direction="vertical">
                <Space wrap>
                    <Dropdown overlay={this.menu} placement="bottomCenter">
                        <Button type="primary" icon={<PlusOutlined />}/>
                    </Dropdown>
                </Space>
            </Space>
        )
    }

    // state = {
    //     tags: this.props.todo.labels,
    //     inputVisible: false,
    //     inputValue: '',
    // };

    // handleClose = removedTag => {
    //     const tags = this.state.tags.filter(tag => tag !== removedTag);
    //     this.setState({ tags });
    //     updateToDo(this.props.todo.id, { ...this.props.todo, labels: tags }).then((response) => {
    //         this.props.updateToDo(response.data)
    //     })
    // };

    // showInput = () => {
    //     this.setState({ inputVisible: true }, () => this.input.focus());
    // };

    // handleInputChange = e => {
    //     this.setState({ inputValue: e.target.value });
    // };

    // handleInputConfirm = () => {
    //     const { inputValue } = this.state;
    //     let { tags } = this.state;
    //     if (inputValue && tags.indexOf(inputValue) === -1) {
    //         tags = [...tags, inputValue];
    //     }
    //     this.setState({
    //         tags,
    //         inputVisible: false,
    //         inputValue: '',
    //     });
    //     updateToDo(this.props.todo.id, { ...this.props.todo, labels: tags }).then((response) => {
    //         this.props.updateToDo(response.data);
    //     })
    // };

    // saveInputRef = input => {
    //     this.input = input;
    // };

    // saveEditInputRef = input => {
    //     this.editInput = input;
    // };

    // colorArray = ["Red ", "Orange", "Violet", "Green", "Blue", "Purple"];

    // hashString = (str) => str
    //     .split('')
    //     .map((char) => char.charCodeAt(0))
    //     .reduce((a, b) => a + b, 0);

    // hashColor = (str) => this.colorArray[this.hashString(str) % this.colorArray.length];

    // render() {
    //     const { tags, inputVisible, inputValue } = this.state;
    //     return (
    //         <>
    //             {tags.map((tag, index) => {

    //                 const isLongTag = tag.length > 20;

    //                 const tagElem = (
    //                     <Tag
    //                         className="edit-tag"
    //                         key={tag}
    //                         closable
    //                         color={this.hashColor(tag)}
    //                         onClose={() => this.handleClose(tag)}
    //                     >
    //                         <span>
    //                             {isLongTag ? `${tag.slice(0, 20)}...` : tag}
    //                         </span>
    //                     </Tag>
    //                 );
    //                 return isLongTag ? (
    //                     <Tooltip title={tag} key={tag}>
    //                         {tagElem}
    //                     </Tooltip>
    //                 ) : (
    //                         tagElem
    //                     );
    //             })}
    //             {inputVisible && (
    //                 <Input
    //                     ref={this.saveInputRef}
    //                     type="text"
    //                     size="small"
    //                     className="tag-input"
    //                     value={inputValue}
    //                     onChange={this.handleInputChange}
    //                     onBlur={this.handleInputConfirm}
    //                     onPressEnter={this.handleInputConfirm}
    //                 />
    //             )}
    //             {!inputVisible && (
    //                 <Tag className="site-tag-plus" onClick={this.showInput}>
    //                     <PlusOutlined /> New Label
    //                 </Tag>
    //             )}
    //         </>
    //     );
    // }
}

export default LabelGroup;