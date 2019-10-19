import React from 'react'
import { Layout, Card, Col, Row,Icon } from 'antd'
const { Content } = Layout
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
                    minHeight: 680,
                }}
            >
                <div style={{  padding: '24px' }}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <div style={{marginBottom:'10px'}}>
                                <Card style={{height:'100px',width:'200px',background:'#54a3f7'}}>
                                    <Icon type="user" className="iconcard"/>
        
                                    <span className='iconcard-num' >1130</span>
                                    <span className='iconcard-text'>用户访问量</span>
                                    
                                </Card>
                            </div>
                            <div style={{marginBottom:'10px'}}>
                                <Card style={{height:'100px',width:'200px',background:'#64d572'}}>
                                    <Icon type="bell" className="iconcard"/>
                                   
                                    <span className='iconcard-num'>113</span>
                                    <span className='iconcard-text'>系统消息</span>
                                   
                                </Card>
                            </div>
                            <div style={{marginBottom:'10px'}}>
                                <Card style={{height:'100px',width:'200px',background:'#f25e43'}}>
                                    <Icon type="alert" className="iconcard"/>
                                    
                                    <span className='iconcard-num'>14</span>
                                    <span className='iconcard-text'> 告警提醒</span>
                                   
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Content>
        )
    }
}