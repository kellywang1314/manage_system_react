import React from 'react'
import { Layout,Table, Icon, Switch, Radio, Form, Divider,Button,Card } from 'antd';
const { Content} = Layout
const pagenum = 3
export default class TableList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          isShowCards:false
        }
    }

    render(){
        const {isShowCards} = this.state
        return(
            <Content
                style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 680,
                }}
            >
                <LoadMoreList />
                {isShowCards && <Cards />}
            </Content>
        )
    }
}

const FormItem = Form.Item;


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
const EditableContext = React.createContext();

class LoadMoreList extends React.Component {
    constructor(props){
      super(props)
      this.columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title:'Date',
          dataIndex: 'date',
        },
        {
          title: 'Age',
          dataIndex: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
        {
          title: 'Action',
          key: 'action',
          width: 360,
          render: (text, record) => (
            <span>
              <a href="javascript:;"><Icon type="edit" theme='twoTone' style={{color:'blue'}}/>编辑</a>
              <Divider type="vertical" />
              <a href="javascript:;"><Icon type="delete"  theme='twoTone' twoToneColor='red'/>删除</a>
              <Divider type="vertical" />
            </span>
          )
        }
      ]
      this.state = {
        selectedRowKeys: [],
        loading: false,
        isShowCards:this.props.isShowCards
      }
    }

    start () {
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({
          selectedRowKeys: [],
          loading: false,
        });
      }, 1000);
    };
  
    onSelectChange (selectedRowKeys){
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.setState({ selectedRowKeys });
    };
  
    render() {
      const { loading, selectedRowKeys } = this.state;
      const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectChange.bind(this),
      };
      const hasSelected = selectedRowKeys.length > 0;
      return (
        <div>
          <div style={{ marginBottom: 16 }}>
            <Button type="primary" onClick={() => this.start()} disabled={!hasSelected} loading={loading}>
              Reload
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </span>
          </div>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
      );
    }
}

class Cards extends React.Component {
  render(){
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
  </div>
  }
}

