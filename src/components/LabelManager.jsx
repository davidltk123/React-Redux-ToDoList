import { Button, Input } from 'antd';
import React, { Component } from 'react';
import { getLabelList } from '../apis/labels';
import { PlusOutlined  } from '@ant-design/icons';
import LabelItemContainer from '../containers/LabelItemContainer';
import { addNewLabel } from "../apis/labels"

class LabelManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        }
    }

    componentDidMount() {
        getLabelList().then(response => {
            this.props.initLabels(response.data);
        });
    }

    onChange = (event) => {
        this.setState({
            content: event.target.value,
        });
    }

    addLabel = () => {
        addNewLabel({content:this.state.content, color: '#a65959'}).then(response => {
            this.props.addLabel(response.data);
        });
        this.setState({
            content: '',
        });
    }

    render() {
        const { labelList } = this.props;

        return (
            <div>
                {
                    labelList.map(value =>
                        <LabelItemContainer key={value.id} label={value} />
                    )
                }
                <Input placeholder="input a new todo here..." value={this.state.content} allowClear onChange={this.onChange} />
                <Button type="primary" onClick={this.addLabel} >add</Button>
            </div>
        );
    }
}

export default LabelManager;