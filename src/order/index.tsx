import React, { Component } from 'react';
import RTable from './components/RTable'
import Radio from './components/Radio'
import './index.scss'

const columns = [
    {
        title: '订单编号',
        dataIndex: 'avatar',
        key: 'avatar',
    },
    {
        title: '提交时间',
        dataIndex: 'time',
        key: 'time',
    },

    {
        title: '用户账号',
        key: 'count',
        dataIndex: 'count',
    },
    {
        title: '订单金额',
        key: 'money',
        dataIndex: 'money',
    },
    {
        title: '支付方式',
        key: 'money',
        dataIndex: 'money',
    },
    {
        title: '订单来源',
        key: 'money',
        dataIndex: 'money',
    },
    {
        title: '订单状态',
        key: 'money',
        dataIndex: 'money',
    },
    {
        title: '操作',
        key: 'money',
        dataIndex: 'money',
    },
]


class OrderList extends Component {

    render() {
        return (
            <div className='order-list'>
                <h1>订单列表</h1>
                <div className='table-box'>
                    <div>
                        <Radio />
                    </div>
                    <div>
                        <RTable columns={columns} />
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderList