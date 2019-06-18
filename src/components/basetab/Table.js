import React from 'react'
import { Layout, } from 'antd'
const { Content} = Layout
export default class Table extends React.Component{
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
                margin: 0,
                minHeight: 680,
                }}
            >
                表格
            </Content>
        )
    }
}