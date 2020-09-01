import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
import './App.scss';
import SiderDemo from './home/index';
import OrderList from './order/index';
import Goods from './goods/index';
import Users from './users/index';

const { Header, Sider, Content } = Layout;
class App extends Component {

  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className='App'>
        <Router>
          <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" >
                <h1 className="logo-name">xxx</h1>
              </div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="/home" icon={<UserOutlined />}>
                  <Link to='/home'>首页</Link>
                </Menu.Item>
                <Menu.Item key="/order" icon={<FileDoneOutlined />}>
                  {/* 订单管理 */}
                  <Link to='/order'>订单管理</Link>
                </Menu.Item>
                <Menu.Item key="/goods" icon={<LaptopOutlined />}>

                  <Link to='/goods'>商品管理</Link>
                </Menu.Item>
                <Menu.Item key="/user" icon={<TeamOutlined />}>

                  <Link to='/user'>用户管理</Link>
                </Menu.Item>
                <Menu.Item key="/setting" icon={<SettingOutlined />}>
                  <Link to='/setting'>系统设置</Link>
                </Menu.Item>
                <Menu.Item key="/statistics" icon={<LineChartOutlined />}>
                  <Link to='/statistics'>流量统计</Link>
                </Menu.Item>
                <Menu.Item key="/deal" icon={<PropertySafetyOutlined />}>
                  <Link to='/deal'>交易系统</Link>
                </Menu.Item>
                <Menu.Item key="/center" icon={<PoweroffOutlined />}>
                  <Link to='/center'>个人中心</Link>
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
                <Route path='/home' component={SiderDemo}></Route>
                <Route path='/order' component={OrderList}></Route>
                <Route path='/goods' component={Goods}></Route>
                <Route path='/user' component={Users}></Route>
                <Route path='/setting' component={SiderDemo}></Route>
                <Route path='/statistics' component={SiderDemo}></Route>
                <Route path='/deal' component={SiderDemo}></Route>
                <Route path='/center' component={SiderDemo}></Route>
              </Content>
            </Layout>
          </Layout>
        </Router>

      </div>
    )
  }
}

export default App;
