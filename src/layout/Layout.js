import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import Head from './Head'
import MenuList from './MenuList'
const { Content, Sider } = Layout
export default class PageLayout extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
        return(
            <Layout>
              <Head />
              <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                  <MenuList />
                </Sider>
                <Layout style={{ padding:'0 24px 24px',marginTop:'24' }}>
                  <Content
                    style={{
                      background: '#fff',
                      padding: 24,
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
