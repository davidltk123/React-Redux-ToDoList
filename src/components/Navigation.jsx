import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { EditOutlined, CheckOutlined} from '@ant-design/icons';

class Navigation extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="mail" icon={<EditOutlined />}>
                    <NavLink to="/">go to list page</NavLink>
                </Menu.Item>
                <Menu.Item key="app" icon={<CheckOutlined />}>
                    <NavLink to="/done">go to done page</NavLink>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navigation;