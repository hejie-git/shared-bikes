import React,{Component} from "react";
import {Card, Form, Button, Input, Checkbox} from "antd";
import './style.less'
import { UserOutlined,UnlockOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 2},
  wrapperCol: { span: 8 },
};

const tailLayout = {
  wrapperCol: { offset: 2, span: 8 },
};

class Login extends Component{

  render() {
    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    return (
      <div className={'login'}>
        <Card title={'登录表单'}>
          <Form {...layout}
                initialValues={{remember:true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
            <Form.Item
              label={'Username'}
              name={'username'}
              rules={[
                {required:true,message:"请输入用户名！"}
              ]}
            ><Input prefix={<UserOutlined />}/></Form.Item>
            <Form.Item
              label={'Password'}
              name={'password'}
              rules={[
                {
                  required:true,message:"请输入密码！"
                }
              ]}
            >
              <Input.Password prefix={<UnlockOutlined />}/>
            </Form.Item>
            <Form.Item {...tailLayout} name={'remember'} valuePropName="checked">
              <Checkbox>记住密码</Checkbox>
              <a style={{float:'right'}} href={'/'}>忘记密码</a>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type={"primary"} htmlType={"submit"}>登录</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  };
}

export default Login