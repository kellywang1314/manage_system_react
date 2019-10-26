import React from 'react'
import { Layout} from 'antd'
const { Content } = Layout
export default class UserVisit extends React.Component {
    render(){
        return(
            <Content
                style={{
                    background: '#fff',
                    height: 500,
                    width: 650,
                    position:'absolute',
                    top:300,
                    left:760,
                }}
            >
                关于用户访问信息
            </Content>
        )
    }
}