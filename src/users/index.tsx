import React, { Component } from 'react'
import './index.scss'
import CreateForm from './components/CreateForm'
import CreateForm2 from './components/CreateForm2'



import { Tabs } from 'antd';

const { TabPane } = Tabs;



class Users extends Component {
    curpage(key: string) {
        console.log(key);
    }
    render() {
        return (
            <div className='users-list'>
                <h1 className='users-title'>用户管理</h1>
                <div className='users-box'>
                    {/* <Steps /> */}
                    <Tabs defaultActiveKey="1" onChange={(e) => this.curpage(e)}>
                        <TabPane tab="Tab 1" key="1">
                            <CreateForm />
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            <CreateForm2 />
                        </TabPane>
                        {/* <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane> */}
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Users