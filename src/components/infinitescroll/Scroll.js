import React from 'react'
import { Layout, List,Avatar} from 'antd'
import { products } from './mock'
const { Content} = Layout
export default class Author extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:products
        }
        this.handlescroll = this.handlescroll.bind(this)
    }
    componentDidMount(){
       
        window.addEventListener('scroll',this.handlescroll,false)
    }

    handlescroll(){
        //文档高度
        let doumentHeight =document.body.scrollHeight
        //可见区域高度
        let cilenttheight = document.body.clientHeight
        //卷去部分高度
        let scrolltop = document.body.scrollTop
        let {list:oldlist} = this.state
        if(cilenttheight+scrolltop+100>doumentHeight){
            this.setState({
                list:oldlist.concat(products)
            })
        }
    }


    render(){
        const { list } = this.state
        return(
            <Content
                style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 680,
                }}
            >
            <List
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                <List.Item>
                <List.Item.Meta
                    avatar={<img src='https://dimg06.c-ctrip.com/images/1007050000000s35fE7FA_C_180_230.jpg'/>}
                    title={item.hotelName}
                    description={item.name}
                />
                </List.Item>
    )}
  />,
            </Content>
        )
    }
}