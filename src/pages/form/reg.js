import React,{Component} from "react";
import {Card,Button,Form,Input,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload} from "antd";
import "./style.less"

const layout = {
  labelCol: { span: 2},
  wrapperCol: { span: 8 },
};

class Reg extends Component{

 /* state = {
    value: 1,
  };*/
  onChange=(date,dateString)=>{
    console.log(date);
    console.log('出生日期'+dateString)
  };

  render() {
    return (
      <div className={'reg'}>
        <Card title={'注册表单'}>
          <Form {...layout}>
            <Form.Item
              label={'用户名'}
              name={'username'}
              rules={[
                {
                  required:true,
                  message:'请输入用户名！'
                }
              ]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label={'密码'}
              name={'password'}
              rules={[
                {
                  required:true,
                  message:'请输入密码！'
                }
              ]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label={'确认密码'}
              name={'confirmPassword'}
              rules={[
                {
                  required:true,
                  message:'请输入密码！'
                }
              ]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label={'性别'}
              name={'sex'}
            >
              <Radio.Group value={0}>
                <Radio value={0}>男</Radio>
                <Radio value={1}>女</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label={'出生年月'}
              name={'birth'}
            >
              <DatePicker onChange={this.onChange}/>
            </Form.Item>
            <Form.Item
              label={'是否已婚'}
              name={'marriage'}
            >
              <Switch checkedChildren={'是'} unCheckedChildren={'否'}/>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  };
}

export default Reg