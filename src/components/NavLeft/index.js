import React,{Component} from "react";
import { Menu } from 'antd';
import MenuConfig from "../../config/menuConfig"
import './index.less'

const { SubMenu } = Menu;

class NavLeft extends Component{
  constructor(props) {
    super(props);
    this.state={
      menuTreeNode:[]
    }
  }

  componentDidMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({menuTreeNode})
  }

  //菜单渲染
  renderMenu = (data)=>{
    return data.map((item) => {
      if (item.children){
        return (<SubMenu title={item.title} key={item.key}>
          {this.renderMenu(item.children)}
        </SubMenu>)
      }
      return <Menu.Item key={item.key}>{item.title}</Menu.Item>
    })
  };

  render() {
    return (
      <div>
        <div className={'logo'}>
          <img className={'logo-img'} src="/assets/logo.svg" alt={''}/>
          <h1 className={'logo-text'}>单车管理平台</h1>
        </div>
        <Menu theme={'dark'} mode="vertical">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}

export default NavLeft