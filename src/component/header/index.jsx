import React from 'react'
import './header.scss'
import imgUrl from './../../images/kobe.jpg'
import { Button, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default class Header extends React.Component {
    // constructor() {
    //     super()
    // }
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        1st menu item
                            </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        2nd menu item
                        </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        3rd menu item
                        </a>
                </Menu.Item>
            </Menu>
        )
        return (
            <div className="header">
                <img src={imgUrl} alt="我是图片" className="logo" />
                <div className="setting">
                    <Dropdown overlay={menu}>
                        <Button type="link" className="ant-drapdown-link" onClick={e => e.preventDefault()}>setting<DownOutlined /></Button>
                    </Dropdown>
                </div>
            </div>
        )
    }
}