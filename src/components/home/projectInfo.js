import React from 'react'
import { Layout} from 'antd'
const { Content } = Layout
export default class ProjectInfo extends React.Component {
    render(){
        return(
            <Content
                style={{
                    backgroundColor: '#fff',
                    height: 380,
                    width: 500,
                    position:'absolute',
                    top:420,
                    left:224,
                }}
            >
                关于项目信息以及技术栈
            </Content>
        )
    }
}