import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
import RCascader from './RCascader'
import './Steps.scss'

const { Step } = Steps;

const steps = [
    {
        title: '选择商品分类',
        content: `${RCascader}`,
    },
    {
        title: '填写商品信息',
        content: 'Second-content',
    },
    {
        title: '填写商品属性',
        content: 'Last-content',
    },
    {
        title: '选择商品关联',
        content: 'Last-content',
    },
];

class GoodsSteps extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        return (
            <>
                <Steps current={current} labelPlacement='vertical'>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                            上一步
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            下一步
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('')}>
                            完成
                        </Button>
                    )}

                </div>
            </>
        );
    }
}

export default GoodsSteps