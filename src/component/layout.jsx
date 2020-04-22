import React from 'react'
import Head from './header'
import SideMenu from './sideMenu'
import { Layout } from 'antd'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from './dashboard'
import SystemSetting from './SystemSetting'

const { Header, Content, Sider } = Layout

function Layouter() {
    return (
        <div>
            <Layout>
                <Header className="header">
                    <Head></Head>
                </Header>
                <HashRouter>
                    <Layout>
                        <Sider width={200} style={{ background: "#fff" }} >
                            <SideMenu></SideMenu>
                        </Sider>
                        <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>

                            <Switch>
                                <Route path="/dashboard" component={Dashboard}></Route>
                                <Route path="/systemSetting" component={SystemSetting}></Route>

                            </Switch>
                        </Content>
                    </Layout>
                </HashRouter>
            </Layout>
        </div>
    )

}

export default Layouter;
