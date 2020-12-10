import React, { Component } from 'react';
import { Tag, Input, Tooltip, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { updateLabel } from "../apis/todos"

class LabelGroup extends Component {
    state = {
        tags: this.props.todo.labels,
        inputVisible: false,
        inputValue: '',
        // inputColor: 'red',
    };

    handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        this.setState({ tags });
        updateLabel(this.props.todo.id, { ...this.props.todo, labels: tags }).then((response) => {
            this.props.updateLabels(response.data)
        })
    };

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };

    // handleColorChange = value => {
    //     this.setState({ inputColor: value });
    // }

    handleInputConfirm = () => {
        const { inputValue} = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            // tags = [...tags, {content: inputValue, color: inputColor}];
            tags = [...tags, inputValue];
        }
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
        updateLabel(this.props.todo.id, { ...this.props.todo, labels: tags }).then((response) => {
            this.props.updateLabels(response.data);
        })
    };

    saveInputRef = input => {
        this.input = input;
    };

    saveEditInputRef = input => {
        this.editInput = input;
    };

    render() {
        const { Option } = Select;

        const { tags, inputVisible, inputValue} = this.state;
        return (
            <>
                {tags.map((tag, index) => {
              
                    const isLongTag = tag.length > 20;

                    const tagElem = (
                        <Tag
                            className="edit-tag"
                            key={tag}
                            closable
                            onClose={() => this.handleClose(tag)}
                        >
                            <span>
                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                            </span>
                        </Tag>
                    );
                    return isLongTag ? (
                        <Tooltip title={tag} key={tag}>
                            {tagElem}
                        </Tooltip>
                    ) : (
                            tagElem
                        );
                })}
                {inputVisible && (
                    /*<Input.Group compact size="large">*/
                        <Input
                            /*style={{ width: '50%' }}*/
                            ref={this.saveInputRef}
                            type="text"
                            size="small"
                            className="tag-input"
                            value={inputValue}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputConfirm}
                            onPressEnter={this.handleInputConfirm}
                        />
                        /*<Select defaultValue="red" style={{ width: '30%' }}>
                            <Option value="red">red</Option>
                            <Option value="orange">orange</Option>
                            <Option value="lime">lime</Option>
                            <Option value="green">green</Option>
                            <Option value="blue">blue</Option>
                            <Option value="purple">purple</Option>
                        </Select>
                    </Input.Group>*/
                )}
                {!inputVisible && (
                    <Tag className="site-tag-plus" onClick={this.showInput}>
                        <PlusOutlined /> New Label
                    </Tag>
                )}
            </>
        );
    }
}

export default LabelGroup;