import React,{Component} from "react";
import {Card,Button,Modal} from "antd";

class Modals extends Component{

  state = {
    showModal1 : false,
    showModal2 : false,
    showModal3 : false,
    showModal4 : false
  };

  handleOnCancel = (type) => {
    this.setState({
      [type] : true
    })
  };

  handleConfirm = (type) => {
    Modal[type]({
      title: '确认？',
      content: '确定吗？',
      onOk(){
        console.log('OK')
      },
      onCancel(){
        console.log('Cancel')
      }
    })

  };

  render(){
    const {showModal1,showModal2,showModal3,showModal4} = this.state
    return (
      <div className={'modals'}>
        <Card title={'基础模态框'} className={'btn'}>
          <Button onClick={() => this.handleOnCancel('showModal1')}>Open</Button>
          <Button onClick={() => this.handleOnCancel('showModal2')}>自定义页脚</Button>
          <Button onClick={() => this.handleOnCancel('showModal3')}>顶部20px弹框</Button>
          <Button onClick={() => this.handleOnCancel('showModal4')}>水平垂直居中</Button>
        </Card>
        <Modal title={'React'} visible={showModal1} onCancel={() => this.setState({showModal1 : false})}>
          <p>欢迎学习React</p>
        </Modal>
        <Modal title={'React'} visible={showModal2} okText={'好的'} cancelText={'取消'} onCancel={() => this.setState({showModal2 : false})}>
          <p>欢迎学习React</p>
        </Modal>
        <Modal title={'React'} visible={showModal3} style={{top:'20px'}} onCancel={() => this.setState({showModal3 : false})}>
          <p>欢迎学习React</p>
        </Modal>
        <Modal title={'React'} visible={showModal4} wrapClassName={'vertical-center-modal'} onCancel={() => this.setState({showModal4 : false})}>
          <p>欢迎学习React</p>
        </Modal>
        <Card title={'信息确认框'} className={'btn'}>
          <Button onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button onClick={() => this.handleConfirm('warning')}>Warning</Button>
        </Card>
      </div>
    )
  };
}

export default Modals