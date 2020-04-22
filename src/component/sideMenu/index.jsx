import React from 'react'
import { Menu } from 'antd'
import Axios from 'axios'
import {
    MailOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom'
const { SubMenu } = Menu

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        Axios.get("data/menu.json", {})
            .then(res => {
                if (res.data.code === 200) {
                    console.log(res.data)
                    this.setState({ data: res.data.data })
                }
            })
    }
    handleClick = e => {
        console.log('click ', e);
    }
    createMenu() {

    }
    render() {
        const menuItems = this.state.data.map((item) => {
            if (item.children && item.children.length > 0) {
                return (
                    <SubMenu key={item.key} title={<span><MailOutlined /> {item.title}</span>}>
                        {
                            item.children.map((i) => {
                                return (
                                    <Menu.Item key={i.key}>
                                        <Link to={i.url}>{i.name}</Link></Menu.Item>
                                )
                            })
                        }
                    </SubMenu>
                )
            } else {
                return (

                    <Menu.Item key={item.key}><Link to={item.url}>{item.name}  </Link></Menu.Item>

                )
            }
        })
        return (
            <Menu
                onClick={this.handleClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                {menuItems}
            </Menu>
        )
    }
}