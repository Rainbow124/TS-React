

import React, { Component } from 'react';
import { Table } from 'antd';


const columns = [
    {
        title: '头像',
        dataIndex: 'avatar',
        key: 'avatar',
    },
    {
        title: '下单时间',
        dataIndex: 'time',
        key: 'time',
    },

    {
        title: '件数',
        key: 'count',
        dataIndex: 'count',
    },
    {
        title: '金额',
        key: 'money',
        dataIndex: 'money',
    },
];

const data = [
    {
        key: '1',
        avatar: 'Rainbow',
        time: '2020-8-11',
        count: 32,
        money: '300',
    },
    {
        key: '2',
        avatar: 'Rainbow',
        time: '2020-8-11',
        count: 32,
        money: '300',
    },
    {
        key: '3',
        avatar: 'Rainbow',
        time: '2020-8-11',
        count: 32,
        money: '300',
    },
    {
        key: '4',
        avatar: 'Rainbow',
        time: '2020-8-11',
        count: 32,
        money: '300',
    },
    {
        key: '5',
        avatar: 'Rainbow',
        time: '2020-8-11',
        count: 32,
        money: '300',
    },
    {
        key: '6',
        avatar: 'Rainbow',
        time: '2020-8-11',
        count: 32,
        money: '300',
    },
    {
        key: '7',
        avatar: 'Rainbow',
        time: '2020-8-11',
        count: 32,
        money: '300',
    }
];
class RTable extends Component {

    render() {
        return (
            <Table columns={columns} dataSource={data} />
        )
    }
}

export default RTable;
