import React,{Component} from "react";
import {
  Card,
  Button,
  Form,
  Input,
  Radio,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  message,
  Checkbox
} from "antd";
import { LoadingOutlined, PlusOutlined,UserOutlined,UnlockOutlined } from '@ant-design/icons';
import "./style.less"
import moment from 'moment';
const {Option} = Select;
const {TextArea} = Input;

const layout = {
  labelCol: { span: 2},
  wrapperCol: { span: 8 },
};

const tailLayout = {
  wrapperCol: { offset: 2, span: 8 },
};

class Reg extends Component{

  state = {
    value: 1
  };

  getBase64=(img, callback)=>{
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  handleOnChange=(e)=>{
    // console.log(e.target.value);
    this.setState({
      value:e.target.value
    })
  };

  beforeUpload=(file)=>{
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  handleChangeAvatar=(info)=>{
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  onFinish=(value)=>{
    console.log(value)
  };

  render() {
    const {imageUrl} = this.state;
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className={'reg'}>
        <Card title={'注册表单'}>
          <Form {...layout} onFinish={this.onFinish} initialValues={{sex:0,hobby:['0','1'],marriage:false,agreement:false,currentStatu:"study"}}>
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
              <Input prefix={<UserOutlined />}/>
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
              <Input.Password prefix={<UnlockOutlined />}/>
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
              <Input.Password prefix={<UnlockOutlined />}/>
            </Form.Item>
            <Form.Item
              label={'性别'}
              name={'sex'}
            >
              <Radio.Group onChange={this.handleOnChange} value={this.state.value}>
                <Radio value={0}>男</Radio>
                <Radio value={1}>女</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label={'出生年月'}
              name={'birth'}
            >
              <DatePicker/>
            </Form.Item>
            <Form.Item
              label={'是否已婚'}
              name={'marriage'}
              valuePropName="checked"
            >
              <Switch checkedChildren={'是'} unCheckedChildren={'否'}/>
            </Form.Item>
            <Form.Item
              label={'当前状态'}
              name={'currentStatu'}
            >
              <Select style={{ width: 240 }}>
                <Option value="saltedFish">有梦想的咸鱼</Option>
                <Option value="study">努力学习中</Option>
                <Option value="success">功成名就</Option>
                <Option value="retire">养老中</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={'选择时间'}
              name={'time'}
            >
              <TimePicker defaultValue={moment('00:00:00','HH:mm:ss')}/>
            </Form.Item>
            <Form.Item
              label={'爱好'}
              name={'hobby'}
            >
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                // defaultValue={'唱'}
              >
                <Option value={'0'}>唱</Option>
                <Option value={'1'}>跳</Option>
                <Option value={'2'}>rap</Option>
                <Option value={'3'}>篮球</Option>
                <Option value={'4'}>电影</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={'输入地址'}
              name={'address'}
            >
              <TextArea placeholder="输入地址" allowClear />
            </Form.Item>
            <Form.Item
              label={'邮箱'}
              name={'email'}
              rules={[
                {
                  pattern:/^([a-zA-Z]|[0-9])(\w|\\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
                  message:'邮箱格式错误'
                },{
                  required:true,
                  message:'请输入邮箱！'
                }
              ]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label={'上传头像'}
              name={'avatar'}
            >
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={this.beforeUpload}
                onChange={this.handleChangeAvatar}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>
            </Form.Item>
            <Form.Item {...tailLayout}
              name={'agreement'}
              valuePropName="checked"
            >
              <Checkbox>我已阅读协议</Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type={"primary"} htmlType={"submit"}>注册</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  };
}

export default Reg