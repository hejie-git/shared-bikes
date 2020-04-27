import React,{Component} from "react";
import {Card,Table} from "antd";
import './style.less'
import Axios from '../../axios/index';

class BasicTable extends Component{
  state={dataSource1:[]};

  componentDidMount() {
    const dataSource=[
      {
        id:'1',
        name:'张三',
        sex:'男',
        birth:'2000-10-10',
        marriage:'0',
        currentStatu:'0',
        hobby:'0',
        address:"天津市滨海新区"
      },
      {
        id:'2',
        name:'李四',
        sex:'女',
        birth:'2000-10-10',
        marriage:'0',
        currentStatu:'0',
        hobby:'0',
        address:"天津市滨海新区"
      },
      {
        id:'3',
        name:'王五',
        sex:'男',
        birth:'2000-10-10',
        marriage:'0',
        currentStatu:'0',
        hobby:'0',
        address:"天津市滨海新区"
      },
      {
        id:'4',
        name:'赵六',
        sex:'男',
        birth:'2000-10-10',
        marriage:'0',
        currentStatu:'0',
        hobby:'0',
        address:"天津市滨海新区"
      },
      {
        id:'5',
        name:'宋七',
        sex:'男',
        birth:'2000-10-10',
        marriage:'0',
        currentStatu:'0',
        hobby:'0',
        address:"天津市滨海新区"
      }
    ];
    this.setState({
      dataSource
    });

    this.request()
  }

  request=()=>{
    Axios.ajax({
      url:'/table/list',
      data:{
        params:{
          // page:1
        }
      }
    }).then((res)=>{
      if (res.code === '0'){
        this.setState({
          dataSource1:res.data
        });
        console.log("data:"+res.data)
      }
    })
  };


  render() {

    const columns = [
      {
        title:'id',
        dataIndex:'id',
        key:'id'
      },
      {
        title:'姓名',
        dataIndex:'name',
        key:'name'
      },
      {
        title:'性别',
        dataIndex:'sex',
        key:'sex'
      },
      {
        title:'出生年月',
        dataIndex:'birth',
        key:'birth'
      },
      {
        title:'是否已婚',
        dataIndex:'marriage',
        key:'marriage'
      },
      {
        title:'当前状态',
        dataIndex:'currentStatu',
        key:'currentStatu'
      },
      {
        title:'爱好',
        dataIndex:'hobby',
        key:'hobby'
      },
      {
        title:'地址',
        dataIndex:'address',
        key:'address'
      }
    ];
    const rowSelection = {
      type: 'radio'
    };

    return (<div className={'basicTable'}>
      <Card title={'基础表格'}>
        <Table rowKey={record => record.uid} bordered dataSource={this.state.dataSource} columns={columns}/>
      </Card>
      <Card title={'动态渲染'}>
        <Table rowKey={record => record.uid} bordered dataSource={this.state.dataSource1} columns={columns}/>
      </Card>
      <Card title={'带单选框'}>
        <Table rowKey={record => record.uid} rowSelection={rowSelection} bordered dataSource={this.state.dataSource} columns={columns}/>
      </Card>
    </div>)
  }
}

export default BasicTable