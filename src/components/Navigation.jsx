import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { EditOutlined, CheckOutlined} from '@ant-design/icons';

class Navigation extends Component {
    render() {
        return (
            <Menu className="menu" mode="horizontal">
                <Menu.Item className="menu-item" icon={<CheckOutlined />}>
                    <NavLink className="navlink-item" to="/done">Done List</NavLink>
                </Menu.Item>
                <Menu.Item className="menu-item" icon={<EditOutlined />}>
                    <NavLink className="navlink-item" to="/">Todo List</NavLink>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navigation;