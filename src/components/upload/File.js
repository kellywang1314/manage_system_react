import React from 'react'
import { Layout,Upload, Icon, message } from 'antd'
const { Dragger } = Upload
const { Content} = Layout
export default class File extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        const props = {
            name: 'file',
            multiple: true,
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange(info) {
              const { status } = info.file
              if (status !== 'uploading') {
                console.log(info.file, info.fileList)
              }
              if (status === 'done') {
                message.success(`${info.file.name}上传成功`)
              } else if (status === 'error') {
                message.error(`${info.file.name}上传失败`)
              }
            },
          };
        return(
            <Content
                style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 300,
                minWidth: 300,
                }}
            >
               <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">点击或者拖拽一个文件到此处</p>
                    <p className="ant-upload-hint">支持单个或者批量上传</p>
                </Dragger>
            </Content>
        )
    }
}