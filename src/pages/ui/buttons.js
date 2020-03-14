import React,{Component} from "react";
import {Card,Button,Radio} from "antd";
import "./ui.less"
import {PlusOutlined,EditOutlined,DeleteOutlined,SearchOutlined,DownloadOutlined,LeftOutlined,RightOutlined} from "@ant-design/icons";

class Buttons extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      size:'default'
    }
  }

  handleStopLoad = ()=>{
    this.setState({
      loading: false
    });
  };

  handleOnChange =(e) =>{
    console.log('radio checked',e.target.value);
    this.setState({
      size: e.target.value
    })
  }

  render() {
    const {loading,size} = this.state
    return (
      <div className={'buttons'}>
        <Card title={'基础按钮'} className={'btn'}>
          <Button type={'primary'}>百度一下</Button>
          <Button>百度一下</Button>
          <Button type={'dashed'}>百度一下</Button>
          <Button type={'link'}>百度一下</Button>
          <Button danger>百度一下</Button>
          <Button disabled>百度一下</Button>
        </Card>
        <Card title={'图形按钮'} className={'btn'}>
          <Button icon={<PlusOutlined/>}>创建</Button>
          <Button icon={<EditOutlined />}>编辑</Button>
          <Button icon={<DeleteOutlined />}>删除</Button>
          <Button icon={<SearchOutlined />} shape={'circle'}/>
          <Button type={'primary'} icon={<SearchOutlined />}>搜索</Button>
          <Button type={'primary'} icon={<DownloadOutlined />}>下载</Button>
        </Card>
        <Card title={'Loading按钮'} className={'btn'}>
          <Button type={'primary'} loading={loading}>确定</Button>
          <Button type={'primary'} loading={loading} shape={'circle'}/>
          <Button loading={loading}>点击加载</Button>
          <Button loading={loading} shape={'circle'}/>
          <Button type={'primary'} onClick={this.handleStopLoad}>关闭</Button>
        </Card>
        <Card title={'按钮组'}>
          <Button.Group>
            <Button type={'primary'} icon={<LeftOutlined />}>返回</Button>
            <Button type={'primary'} icon={<RightOutlined />}>前进</Button>
          </Button.Group>
        </Card>
        <Card title={'按钮尺寸'} className={'btn'}>
          <Radio.Group onChange={this.handleOnChange} defaultValue={'default'}>
            <Radio value={'small'}>小</Radio>
            <Radio value={'default'}>中</Radio>
            <Radio value={'large'}>大</Radio>
          </Radio.Group>
          <Button type={'primary'} size={size}>百度一下</Button>
          <Button size={size}>百度一下</Button>
          <Button type={'dashed'} size={size}>百度一下</Button>
          <Button danger size={size}>百度一下</Button>
        </Card>
      </div>
    )
  };
  }

export default Buttons