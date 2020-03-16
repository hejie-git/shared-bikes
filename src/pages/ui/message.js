import React,{Component} from "react";
import {Card,Button,message} from "antd";
import "./ui.less"

class Message extends Component{

  render() {
    const info = () => {
      message.info('这是一个全局提示')
    };

    const success = () =>{
      message.success('成功')
    };

    const warning = () =>{
      message.warning('警告')
    };

    const error = () =>{
      message.error('错误')
    };

    const loading = () =>{
      message.loading('正在加载',2)
        .then(()=> message.success('加载完成'),2)
        .then(() => message.info('初始化完成',2))
    };

    return (
      <div className={'loading'}>
        <Card title={'全局提示'} className={'btn'}>
          <Button type={"primary"} onClick={info}>点击提示</Button>
          <Button type={"primary"} onClick={success}>Success</Button>
          <Button type={"primary"} onClick={warning}>Warning</Button>
          <Button type={"primary"} onClick={error}>Error</Button>
        </Card>
        <Card title={'Promise接口'} className={'btn'}>
          <Button type={"primary"} onClick={loading}>点击加载</Button>
        </Card>
      </div>
    )
  };
}

export default Message