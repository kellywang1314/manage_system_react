import React from 'react'
import { Link } from 'react-router'
import { Menu, Icon} from 'antd'
import '../css/base.css'
const { SubMenu } = Menu
export default class MenuList extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        username:'Tony cheung',
        SubMenuContent:'Tony'
      }
    }
    handleClick(obj){
      console.log(obj)
      if(obj.key === 'sub1-1'){
      }
    }
    render(){
        let num=48
        return (
          <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu  key="sub1" title={<span><Icon type="home" />首页</span>}>
              <Menu.Item key="sub1-1"><Link to="/home/home">首页</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="form" />基本表</span>}>
              <Menu.Item key="sub2-1"><Link to="/basetab/table">表格</Link></Menu.Item>
              <Menu.Item key="sub2-2"><Link to="/basetab/form">表单</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="laptop" />上传功能</span>}>
              <Menu.Item key="sub3-1"><Link to="/upload/image">图片上传</Link></Menu.Item>
              <Menu.Item key="sub3-2"><Link to="/upload/file">文件上传</Link></Menu.Item>
            </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="bar-chart" />图表功能</span>}>
              <Menu.Item key="sub4-1"><Link to="/char/line">线性图</Link></Menu.Item>
              <Menu.Item key="sub4-2"><Link to="/char/map">地图</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" title={<span><Icon type="check-circle" />无限滚动优化</span>}>
              <Menu.Item key="sub5-1"><Link to="/infinitescroll/scroll" >无限滚动优化组件</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" title={<span><Icon type="edit" />富文本</span>}>
              <Menu.Item key="sub6-1"><Link to="/richtext/richtext" >富文本</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub7" title={<span><Icon type="exclamation-circle" />关于</span>}>
            <Menu.Item key="sub7-1"><Link to="/about/author">关于作者</Link></Menu.Item>
            <Menu.Item key="sub7-2"><Link to="/about/project">关于项目</Link></Menu.Item>
          </SubMenu>
        </Menu>    
        )
    }
}