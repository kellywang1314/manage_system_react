import React from 'react'
import { Layout} from 'antd'
import { Editor } from 'react-draft-wysiwyg'
const { Content} = Layout
export default class Author extends React.Component{
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
                关于作者
            </Content>
        )
    }
}