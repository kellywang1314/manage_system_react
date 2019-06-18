import React from 'react'
import { Layout, } from 'antd'
const { Content} = Layout
export default class Project extends React.Component{
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
                关于项目
            </Content>
        )
    }
}