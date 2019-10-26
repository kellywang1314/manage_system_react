import React from 'react'
import { Layout} from 'antd'
const { Content } = Layout
export default class AgencyMatter extends React.Component {
    render(){
        return(
            <Content
                style={{
                    backgroundColor: '#fff',
                    height: 400,
                    width: 500,
                    position:'relative',
                    top:-300,
                    left:24,
                }}
            >
                待办事项
            </Content>
        )
    }
}