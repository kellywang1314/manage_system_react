import React from 'react'
import { Layout, } from 'antd'
const { Content} = Layout
export default class File extends React.Component{
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
                上传文件
            </Content>
        )
    }
}