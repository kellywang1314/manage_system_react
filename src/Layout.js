import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import './css/base.css'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
export default class PageLayout extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        SubMenuContent:'Tony'
      }
    }
    handleOpenChange (openKeys) {
      console.log(openKeys)
    }
    handleTitleClick (obj) {
      console.log(obj)
    }
    render(){
        let username = 'TonyChung'
        let {SubMenuContent} = this.state
        return(
            <Layout>
              <Header className="header hearderleft">
                <div className='title'><span className='titleIcon'><Icon type='appstore'/></span>后台管理系统</div>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  style={{ lineHeight: '64px',float:'right'}}
                >
                  <Menu.Item key="1">邮件</Menu.Item>
                  <Menu.Item key="2">全屏</Menu.Item>
                  <Menu.Item key="3">消息</Menu.Item>
                  <SubMenu
                      key="4"
                      title={
                        <span>
                          <Icon type="user" />
                          {username}
                          <Icon type='down' className='down'/>
                        </span>
                      }
                    >
                  </SubMenu>
                </Menu>
              </Header>
            <Layout>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                  onOpenChange={this.handleOpenChange}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="home" />
                        首页
                      </span>
                    }
                    onTitleClick={this.handleTitleClick}
                    
                  >
                    <Menu.Item key="sub1-1">表格</Menu.Item>
                    <Menu.Item key="sub1-2">表单</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="form" />
                        基本表格表单
                      </span>
                    }
                  >
                    <Menu.Item key="sub2-1">表格</Menu.Item>
                    <Menu.Item key="sub2-2">表单</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    title={
                      <span>
                        <Icon type="laptop" />
                        上传功能
                      </span>
                    }
                  >
                    <Menu.Item key="sub3-1">图片上传</Menu.Item>
                    <Menu.Item key="sub3-2">文件上传</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub4"
                    title={
                      <span>
                        <Icon type="bar-chart" />
                        图表功能
                      </span>
                    }
                  >
                    <Menu.Item key="sub4-1">option9</Menu.Item>
                    <Menu.Item key="sub4-2">option10</Menu.Item>
                    <Menu.Item key="sub4-3">option11</Menu.Item>
                    <Menu.Item key="sub4-4">option12</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub5"
                    title={
                      <span>
                        <Icon type="exclamation-circle" />
                        关于
                      </span>
                    }
                  >
                    <Menu.Item key="sub5-1">option9</Menu.Item>
                  </SubMenu>
                </Menu>    
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 680,
                  }}
                >
                  {SubMenuContent}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        )
    }
}
