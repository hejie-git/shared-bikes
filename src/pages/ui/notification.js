import React,{Component} from "react";
import {Card,Button,notification} from "antd";
import { SmileOutlined } from '@ant-design/icons';
import "./ui.less"

class Notification extends Component{

  handleClick = () =>{
    notification.open({
      message:"这是一个提醒框",
      description:"里面的内容随便写写",
      onClick :() =>{
        console.log("message")
      }
    })
  };

  handleCustomIcon =() =>{
    notification.open({
      message:"这是一个提醒框",
      description:"里面的内容随便写写",
      onClick :() =>{
        console.log("message")
      },
      icon:<SmileOutlined style={{ color: '#108ee9' }}/>
    })
  };

  handleCustomStyle = () =>{
    notification.open({
      message:"这是一个提醒框",
      description:"里面的内容随便写写",
      onClick :() =>{
        console.log("message")
      },
      style: {
        width: 600,
        marginLeft: 335 - 600
      }
    })
  };

  handleOpenNotificationWithIcon = type =>{
    notification[type]({
      message:"这是一个提醒框",
      description:"里面的内容随便写写",
      onClick :() =>{
        console.log("message")
      }
    })
  };

  handleCustomPosition = placement =>{
    notification.open({
      message:"这是一个提醒框",
      description:"里面的内容随便写写",
      onClick :() =>{
        console.log("message")
      },
      placement
    })
};

  render() {
    return (
      <div className={'notification'} >
        <Card title={'通知提醒'} className={'btn'}>
          <Button type={"primary"} onClick={this.handleClick}>点击提醒</Button>
          <Button type={"primary"} onClick={() => this.handleOpenNotificationWithIcon('success')}>Success</Button>
          <Button type={"primary"} onClick={() => this.handleOpenNotificationWithIcon('info')}>Info</Button>
          <Button type={"primary"} onClick={() => this.handleOpenNotificationWithIcon('warning')}>Warning</Button>
          <Button type={"primary"} onClick={() => this.handleOpenNotificationWithIcon('error')}>Error</Button>
        </Card>
        <Card title={'自定义'} className={'btn'}>
          <Button type={"primary"} onClick={this.handleCustomIcon}>自定义图标</Button>
          <Button type={"primary"} onClick={this.handleCustomStyle}>自定义样式</Button>
        </Card>
        <Card title={'位置'} className={'btn'}>
          <Button type={"primary"} onClick={() => this.handleCustomPosition('topLeft')}>左上</Button>
          <Button type={"primary"} onClick={() => this.handleCustomPosition('topRight')}>右上</Button>
          <Button type={"primary"} onClick={() => this.handleCustomPosition('bottomLeft')}>左下</Button>
          <Button type={"primary"} onClick={() => this.handleCustomPosition('bottomRight')}>右下</Button>
        </Card>
      </div>
    )
  };
}

export default Notification