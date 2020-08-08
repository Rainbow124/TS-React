import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  FileDoneOutlined,
  LaptopOutlined,
  LineChartOutlined,
  SettingOutlined,
  PoweroffOutlined,
  TeamOutlined,
  PropertySafetyOutlined
} from '@ant-design/icons';
import './index.scss'
const { Header, Sider, Content } = Layout;

class SiderDemo extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" >
            {/* <img className="logo-home" src="../images/logo.jpg" alt=""/> */}
            <h1 className="logo-name">熊猫家私</h1>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              首页
                </Menu.Item>
            <Menu.Item key="2" icon={<FileDoneOutlined />}>
              订单管理
                </Menu.Item>
            <Menu.Item key="3" icon={<LaptopOutlined />}>
              商品管理
                </Menu.Item>
            <Menu.Item key="4" icon={<TeamOutlined />}>
              用户管理
                </Menu.Item>
            <Menu.Item key="5" icon={<SettingOutlined />}>
              系统设置
                </Menu.Item>
            <Menu.Item key="6" icon={<LineChartOutlined />}>
              流量统计
                </Menu.Item>
            <Menu.Item key="7" icon={<PropertySafetyOutlined />}>
              交易系统
                </Menu.Item>
            <Menu.Item key="8" icon={<PoweroffOutlined />}>
              个人中心
                </Menu.Item>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-header-background" style={{ paddingLeft: 20 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              minHeight: 280,
              background: 'f9f9f9'
            }}
          >
            <div className="content">
              <div className="content-head">
                <div className="card card1"></div>
                <div className="card card2"></div>
                <div className="card card3"></div>
                <div className="card card4"></div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }

}
export default SiderDemo
    // ReactDOM.render(<SiderDemo />, mountNode);