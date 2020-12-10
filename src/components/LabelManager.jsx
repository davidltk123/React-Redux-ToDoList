import { Button, Input, Card } from 'antd';
import React, { Component } from 'react';
import { getLabelList } from '../apis/labels';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import ManagableLabelItem from '../components/ManagableLabelItem';
import { addNewLabel } from "../apis/labels"

class LabelManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            color:'#ff0000'
        }
    }

    componentDidMount() {
        getLabelList().then(response => {
            this.props.initLabels(response.data);
        });
    }

    onTextChange = (event) => {
        this.setState({
            content: event.target.value,
        });
    }

    onColorChange = (event) => {
        this.setState({
            color: event.target.value,
        });
    }

    addLabel = () => {
        addNewLabel({ content: this.state.content, color: this.state.color }).then(response => {
            this.props.addLabel(response.data);
        });
        this.setState({
            content: '',
        });
    }

    render() {
        const { labelList } = this.props;
        console.log(this.state.color);

        return (
            <div>
                <Card title="Label List">
                    {/* {cardGridElem} */}
                    <ManagableLabelItem labels={labelList}/>
                </Card>
                <div className="labelListForm">
                    <Input placeholder="input a new label here..." value={this.state.content} allowClear onChange={this.onTextChange} />
                    <Button type="primary" onClick={this.addLabel} >add</Button>
                    <input style={{marginLeft: '20px'}} type="color" value={this.state.color} onChange={this.onColorChange}/>
                </div>
            </div>
        );
    }
}

export default LabelManager;