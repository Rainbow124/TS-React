import React, { Component } from 'react';
import RTable from './components/RTable';
import Radio from './components/Radio';
import { Space, Button } from 'antd';
import './index.scss'

const columns = [
    {
        title: '订单编号',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: '提交时间',
        dataIndex: 'time',
        key: 'time',
    },

    {
        title: '用户账号',
        key: 'account',
        dataIndex: 'account',
    },
    {
        title: '订单金额',
        key: 'money',
        dataIndex: 'money',
    },
    {
        title: '支付方式',
        key: 'payMethod',
        dataIndex: 'payMethod',
    },
    {
        title: '订单来源',
        key: 'source',
        dataIndex: 'source',
    },
    {
        title: '订单状态',
        key: 'status',
        dataIndex: 'status',
    },
    {
        title: '操作',
        key: 'money',
        dataIndex: 'money',
        render: (text: string) => (
            <Space size="middle">
                <Button type="link" >
                    查看详情
                </Button>
            </Space>
        ),
    },
]

const data = [
    {
        key: '1',
        number: '123',
        time: '2020-8-11',
        account: 'Rainbow',
        money: '300',
        payMethod: '微信',
        source: '北京',
        status: '待发货'

    },
    {
        key: '2',
        number: '123',
        time: '2020-8-11',
        account: 'Rainbow',
        money: '300',
        payMethod: '微信',
        source: '北京',
        status: '待发货'

    },
    {
        key: '3',
        number: '123',
        time: '2020-8-11',
        account: 'Rainbow',
        money: '300',
        payMethod: '微信',
        source: '北京',
        status: '待发货'

    },
    {
        key: '4',
        number: '123',
        time: '2020-8-11',
        account: 'Rainbow',
        money: '300',
        payMethod: '微信',
        source: '北京',
        status: '待发货'

    },
    {
        key: '5',
        number: '123',
        time: '2020-8-11',
        account: 'Rainbow',
        money: '300',
        payMethod: '微信',
        source: '北京',
        status: '待发货'

    },
    {
        key: '6',
        number: '123',
        time: '2020-8-11',
        account: 'Rainbow',
        money: '300',
        payMethod: '微信',
        source: '北京',
        status: '待发货'

    },
    {
        key: '7',
        number: '123',
        time: '2020-8-11',
        account: 'Rainbow',
        money: '300',
        payMethod: '微信',
        source: '北京',
        status: '待发货'

    },
    {
        key: '8',
        number: '123',
        time: '2020-8-11',
        account: 'Rainbow',
        money: '300',
        payMethod: '微信',
        source: '北京',
        status: '待发货'

    },
    {
        key: '9',
        number: '123',
        time: '2020-8-11',
        account: 'Rainbow',
        money: '300',
        payMethod: '微信',
        source: '北京',
        status: '待发货'

    },
    {
        key: '10',
        number: '123',
        time: '2020-8-11',
        account: 'Rainbow',
        money: '300',
        payMethod: '微信',
        source: '北京',
        status: '待发货'

    },
]


class OrderList extends Component {

    render() {
        return (
            <div className='order-list'>
                <h1 className='order-title'>订单列表</h1>
                <div className='table-box'>
                    <div className='filter'>
                        <Radio />
                    </div>
                    <div>
                        <RTable columns={columns} dataSource={data} />
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderList