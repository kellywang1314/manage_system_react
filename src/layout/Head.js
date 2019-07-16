import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import '../css/base.css'
const { SubMenu } = Menu
const { Header } = Layout
var a=[]
export default class Head extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        username:'Tony cheung',
        SubMenuContent:'Tony'
      }
    }
    handleUser(e){
        if(e.key == 'logout') {
           alert('logout')
        }
        if(e.key == 'about'){
            alert('about')
        }
    }
    render(){
        let {username} = this.state
        return (
            <Header className="header hearderleft">
                <div className='title'><span className='titleIcon'><Icon type='appstore'/></span>后台管理系统</div>
                <Menu
                     theme="dark"
                     mode="horizontal"
                     style={{ lineHeight: '64px',float:'right'}}
                     onClick={this.handleUser}
                >
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
                        <Menu.Item key="about">关于作者</Menu.Item>
                        <Menu.Item key="logout">退出登录</Menu.Item>
                    </SubMenu>
                </Menu>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  style={{ lineHeight: '64px',float:'right'}}
                >
                  <Menu.Item key="1">邮件</Menu.Item>
                  <Menu.Item key="2">全屏</Menu.Item>
                  <Menu.Item key="3">消息</Menu.Item>
                </Menu>
              </Header>
        )
    }
}