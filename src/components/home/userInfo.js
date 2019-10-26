import React from 'react'
import { Layout} from 'antd'
const { Content } = Layout
export default class UserInfo extends React.Component {
    render(){
        return(
            <Content style={{
                backgroundColor: '#fff',
                height: 200,
                width: 500,
                position:'absolute',
                top:160,
                left:224,
            }}>
                关于登陆用户信息展示
            </Content>
        )
    }
}