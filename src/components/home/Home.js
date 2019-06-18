import React from 'react'
import { Layout, } from 'antd'
const { Content} = Layout
export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <Content
                style={{
                background: '#fff',
                padding: 24,
                minHeight: 680,
                }}
            >
                首页
            </Content>
        )
    }
}