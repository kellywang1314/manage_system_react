import React, { Fragment } from 'react'
import { Layout, } from 'antd'
const { Content } = Layout
export default class Image extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        marginTop: 100,
                        minHeight: 680,
                    }}
                >

                    上传图片
                </Content>

            </React.Fragment>
        )
    }
}