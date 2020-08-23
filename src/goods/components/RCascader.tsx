import { Cascader } from 'antd';
import React, { Component } from 'react';

const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

function onChange(value: any) {
    console.log(value);
}
class RCascader extends Component {
    render() {
        return (
            <div>
                <Cascader
                    defaultValue={['zhejiang', 'hangzhou', 'xihu']}
                    options={options}
                    onChange={onChange}
                />
            </div>
        )
    }
}

export default RCascader
