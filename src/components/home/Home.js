import React from 'react'
import { Layout} from 'antd'
const { Content } = Layout
import ProjectInfo from './projectInfo'
import UserInfo from './userInfo'
import UserVisit from './userVisit'
import SystemInfo from './systemInfo'
import AgencyMatter from './agencyMatter'
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    onChange1(date, dateString) {
        console.log(date, dateString);
    }
    render() {
        return (
            <Content
                style={{
                    background: '#f0f0f0',
                    minHeight: 800,
                }}
            >
                <UserInfo />
                <SystemInfo />
                <UserVisit />
                <ProjectInfo />
                
            </Content>
        )
    }
}