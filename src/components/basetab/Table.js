import React from 'react'
import moment from 'moment'
import { isEmpty,hash } from '../../share/utils'
import { Layout,Table, Icon, Divider,Button, Modal,Popconfirm,Input,DatePicker,Form,Select  } from 'antd';
const { Content } = Layout
const { Search } = Input
const { Option } = Select
//mock数据
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    date:'1962-6-27',
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
export default class TableList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          isShowCards:false,
          editRecord:{},
          editedRecord:{}, 
          delectItems:[], 
        }
       this.handleToggleEdit = this.handleToggleEdit.bind(this)
       this.handleEdited = this.handleEdited.bind(this)
       this.handleDelect = this.handleDelect.bind(this)

    }
    handleToggleEdit(state,record){
      if(isEmpty(record)){
        this.setState({isShowCards:state})
      }
      this.setState({isShowCards:state,editRecord:record})
    }
    handleEdited(state,record){
      if(isEmpty(record)){
        this.setState({isShowCards:state})
      }
      this.setState({isShowCards:state,editedRecord:record})
    }
    
    handleDelect(items){
      this.setState({
        delectItems:items
      })
    }
    render(){
        const { isShowCards,editRecord,editedRecord,delectItems } = this.state
        return(
            <Content
                style={{
                background: '#fff',
                padding: 24,
                minHeight: 680,
                }}
            >
                <LoadMoreList 
                  state={{isShowCards,editRecord,editedRecord,delectItems}} 
                  handleToggleEdit={this.handleToggleEdit}
                  handleEdited={this.handleEdited}
                  handleDelect={this.handleDelect}
                  />
                {isShowCards && <Cards  state={{isShowCards,editRecord}}  handleEdited={this.handleEdited}/>}
            </Content>
        )
    }
}
class LoadMoreList extends React.Component {
    constructor(props){
      super(props)
      this.columns = [
        {
          title: 'name',
          dataIndex: 'name',
        },
        {
          title:'date',
          dataIndex: 'date',
        },
        {
          title: 'Aage',
          dataIndex: 'age',
        },
        {
          title: 'address',
          dataIndex: 'address',
        },
        {
          title: 'action',
          key: 'action',
          width: 360,
          render: (text, record) => (
            <span>
                <a href="javascript:;" onClick={() => this.handleEdit(record)}><Icon type="edit" theme='twoTone' style={{color:'blue'}}/>编辑</a>
                <Divider type="vertical" />
                <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record)}>
                  <a href="javascript:;"><Icon type="delete"  theme='twoTone' twoToneColor='red'/>删除</a>
                  <Divider type="vertical" />
                </Popconfirm>
              
            </span>
          )
        }
      ]
      this.state = {
        loading: false,
        isShowCards:this.props.state.isShowCards,
        editRecord:this.props.state.editRecord,
        editedRecord:this.props.state.editedRecord,
        datalist: data,
        selectedRowKeys: [],
        delectItems:this.props.state.delectItems,
        keyword:''
      }
    }

    componentWillReceiveProps(nextprops){
      if(this.state.editedRecord!==nextprops.state.editedRecord){
        this.setState({
          editedRecord:nextprops.state.editedRecord,
          editRecord:nextprops.state.editRecord
        })
      }
      if(this.state.delectItems!== nextprops.state.delectItems){
        this.setState({delectItems:nextprops.state.delectItems})
      }
    }
    handleDelete (record) {
      let { datalist } = this.state
      this.setState({datalist:datalist.filter(item => item.key !==record.key)})
    }
    handleAdd() {
      this.props.handleToggleEdit(true,{})
      this.props.handleEdited(true,{})

    }
    handleEdit(record) {
      this.props.handleToggleEdit(true,record)
    }
    onSelectChange (selectedRowKeys){
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.setState({ selectedRowKeys })
    }
    handleDelectMuit(){
      const { selectedRowKeys } = this.state
      this.props.handleDelect(selectedRowKeys)
    }
    //查询
    onSearch(value){
      this.setState({
        keyword:value
      })
    }
  
    render() {
      let { datalist,editedRecord,editRecord,selectedRowKeys,delectItems,keyword} = this.state
      let res=[]
      if(!isEmpty(editedRecord)){
        //修改
        if(!isEmpty(editRecord)){
          res = datalist.map((item,index)=>{
            if(item.key === editRecord.key){
              item = editedRecord
            }
            item = item
            return item
          })
        //增加
        }else{
          res = datalist.unshift(editedRecord)
        }
      }
      //删除
      if(!isEmpty(delectItems)){
        datalist.map((item,index) => {
          if(delectItems.indexOf(item.key)===-1){
            res.push(item)
          }
        })
      }
      //搜索
      if(keyword!=''){
        datalist.map((item,index) => {
          let items = item.date + item.name + item.key + item.address+''
          if(items.indexOf(keyword)!=-1){
            res.push(item)
          }
        })
      }
      const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectChange.bind(this),
        hideDefaultSelections: true,
       
      };
      !isEmpty(res) ? datalist = res : ''
      return (
        <div>
          <div style={{ marginBottom: 16}}>
            <Button type="primary" onClick={() => this.handleAdd()} style={{marginRight:'10px'}}>
              添加
            </Button>
            <Button type="primary" onClick={() => this.handleDelectMuit()} style={{marginRight:'10px'}}>
              批量删除
            </Button>
            <Search
              placeholder="请输入用户名"
              enterButton="查询"
              size = 'default'
              onSearch={this.onSearch.bind(this)}
              style={{width:'30%'}}
            />
          </div>
          <Table 
            columns={this.columns} 
            dataSource={datalist}
            rowSelection={rowSelection} 
          />
        </div>
      )
    }
}


class Cards extends React.Component {
  constructor(props){
    super(props)
    let propseditRecord = this.props.state.editRecord
    this.state = {
      visible:this.props.state.isShowCards,
      editRecord: propseditRecord,
      date:isEmpty(propseditRecord)? '' : propseditRecord.date ,
      name:isEmpty(propseditRecord)? '' : propseditRecord.name,
      age:isEmpty(propseditRecord)? '' : propseditRecord.age,
      address:isEmpty(propseditRecord)? '' : propseditRecord.address
    }
    this.handleDatelChange = this.handleDatelChange.bind(this)
  }
  handleCancle(){
    this.setState({visible:false})
    this.props.handleEdited(false,{})
  }
  handleOk(e){
    const {name,age,address,date,editRecord} = this.state
    this.setState({visible:false})
    let key = isEmpty(editRecord) ? hash(name+date+age+address) : editRecord.key
    let newitem = {key:key,name:name,date:date,age:age,address:address}
    this.props.handleEdited(false,newitem)
  }
  handleOnchange(num,e) {
    switch(num){
      case 0:
        this.setState({date:value})
        break
      case 1:
        this.setState({name:e.currentTarget.value})
        break
      case 2:
        this.setState({age:e.currentTarget.value})
        break
      case 3:
        this.setState({address:e.currentTarget.value})
        break
    }
   
  }
 
  handleDatelChange(date,dateString){
    this.setState({date:dateString})
  }
  render(){
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24},
        sm: { span: 16 },
      },
    };
    const dateFormat = 'YYYY-MM-DD'
    const {name,age,address,date} = this.state
    return(
      <Modal 
        title="编辑" 
        bordered={false} 
        visible={this.state.visible}
        okText='确定'
        cancelText='取消'
        onCancel={this.handleCancle.bind(this)}
        onOk={this.handleOk.bind(this)}
      >
        <Form layout='inline' {...formItemLayout} onSubmit={(e) => this.handleSubmit(e)} ref='t'>
          <Form.Item label="日期:" >
            {date && <DatePicker style={{width:'300px'}} defaultValue={moment(date, dateFormat)} onChange={this.handleDatelChange}/>}
            {!date && <DatePicker style={{width:'300px'}}  onChange={this.handleDatelChange}/>}
          </Form.Item>
          <br />
          <Form.Item label="姓名">
            <Input style={{width:'300px'}}  defaultValue={name} onChange={(e) => this.handleOnchange(1,e)}  ref="Name"/>
          </Form.Item>
          <br />
          <Form.Item label="年龄">
            <Input style={{width:'300px'}} defaultValue={age} onChange={(e) => this.handleOnchange(2,e)} ref="Age"/>
          </Form.Item>
          <br />
          <Form.Item label="地址">
            <Input style={{width:'300px'}} defaultValue={address} onChange={(e) => this.handleOnchange(3,e)} ref="Address"/>
          </Form.Item>
          <br />
        </Form>
      </Modal>
    ) 
  }
}
