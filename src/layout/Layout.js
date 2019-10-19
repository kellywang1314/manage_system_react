import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import Head from './Head'
import MenuList from './MenuList'
import Bcrumb from '../common/BreadcrumbCustom'
const { Content, Sider } = Layout
import { BcrumbList,IconList } from '../constant/index'
export default class PageLayout extends React.Component{
    constructor(props){
      super(props)
    }

    render(){
        return(
            <Layout>
              <Head />
              <Layout>
                <Sider width={200} theme={'dark'}>
                  <MenuList />
                </Sider>
                <Layout>
                  <Content
                    style={{
                      background: '#fff',
                      marginLeft:'24px',
                      minHeight: 10,
                    }}
                  >
                    <Bcrumb title={BcrumbList[this.props.location.pathname]} icon={IconList[this.props.location.pathname]}/>
                  </Content>
                  <Content
                    style={{
                      background: '#f0f0f0',
                      //padding: 24,
                      margin: 0,
                      minHeight: 680,
                    }}
                  >
                    {this.props.children}
                  </Content>
                </Layout>
              </Layout>
          </Layout>
        )
    }
}
