import React from 'react'
import { Layout, } from 'antd'
const { Content} = Layout
export default class Form extends React.Component{
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
                marginTop: 100,
                minHeight: 680,
                }}
            >
                表单
            </Content>
        )
    }
}