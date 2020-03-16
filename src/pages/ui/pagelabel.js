import React,{Component} from "react";
import "./ui.less"
import {Card,Tabs} from "antd";
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

const {TabPane} = Tabs;

class Pagelabel extends Component{
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      {
        title: 'Tab 3',
        content: 'Content of Tab 3',
        key: '3',
        closable: false,
      },
    ];
    this.state={
      panes,
      activeKey: panes[0].key
    }
  }

  callback= (key) =>{
    console.log(key);
  };

  onChange = (activeKey) =>{
    this.setState({
      activeKey
    })
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() {
    return (
      <div className={'pagelabel'}>
        <Card title={'Tab页签'} className={'btn'}>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2" disabled>
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>
        <Card title={'自定义图标'} className={'btn'}>
          <Tabs defaultActiveKey="1">
            <TabPane tab={<span>
              <AppleOutlined />
              Tab 1
              </span>
              }
              key="1"
              >
              Tab 1
            </TabPane>
            <TabPane
              tab={
                <span>
                <AndroidOutlined />
                Tab 2
                </span>
              }
              key="2"
              >
              Tab 2
            </TabPane>
          </Tabs>
        </Card>
        <Card title={'新增删除页签'} className={'btn'}>
          <Tabs
            type="editable-card"
            activeKey={this.state.activeKey}
            onChange={this.onChange}
            onEdit={this.onEdit}
          >
            {
              this.state.panes.map((pane) => (
                <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>
              ))
            }
          </Tabs>
        </Card>
      </div>
    )
  };
}

export default Pagelabel