import React from 'react'
import { Layout, List,Avatar} from 'antd'
import { products } from './mock'
import axios from 'axios'
const { Content} = Layout
let num = 1
export default class Author extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
        this.handlescroll = this.handlescroll.bind(this)
    }
    componentDidMount(){
        this.handlefetch()
        window.addEventListener('scroll',this.handlescroll,false)
    }

    async handlescroll(){
        //文档高度
        let doumentHeight =document.body.scrollHeight
        //可见区域高度
        let cilenttheight = document.body.clientHeight
        //卷去部分高度
        let scrolltop = document.body.scrollTop
        if(cilenttheight+scrolltop+50>doumentHeight){
            await this.handlefetch()
        }
    }


     async handlefetch(){
        let that = this
        let filtered = {
            channel: "H5",
            items: [],
            pageIndex: num,
            pageSize: 10,
            saleCity: 2,
            sort: 8,
            startCity: 2,
        }
        axios.post('https://sec-m.ctrip.com/restapi/soa2/13561/search',
        {contentType:"json",filtered:filtered}).then(
            (res) => {
                num++
                let products = res.data.products
                let proKeyQuery = products.map(item => {return {id:item.id,buType: "GT", deptCity: 0}})
                let param = {
                    proKeyQuery,
                    //imageOption:{width: 480, height: 320},
                    imageOption:{width: 600, height: 320},
                    contentType:"json",
                    channel: "h5"
                }
                axios.post('https://sec-m.ctrip.com/restapi/soa2/11899/proInfo4static',param).then((resp)=>{
                    let {list:oldlist} = this.state
                    that.setState({list:oldlist.concat(resp.data.items)})
                })
            }

        )
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
                    avatar={<img src={item.image}/>}
                    title={item.brandName}
                    description={item.proName}
                />
                </List.Item>
    )}
  />,
            </Content>
        )
    }
}



//