import React,{Component} from "react";
import {Card,Spin,Alert} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import "./ui.less"

class Loading extends Component{

  render() {

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    return (
      <div className={'loading'}>
        <Card title={'加载中'} className={'btn'}>
          <Spin className={'load'}/>
          <Spin>
            <Alert message={'这是一个文本框'}/>
          </Spin>
          <Spin className={'load'} indicator={antIcon}/>
          <div>
            <Spin className={'size'} size={"small"}/>
            <Spin className={'size'}/>
            <Spin size={"large"}/>
          </div>
        </Card>
      </div>
    )
  };
}

export default Loading