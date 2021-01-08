import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
import RCascader from './RCascader'
import './Steps.scss'

const { Step } = Steps;

const steps = [
    {
        title: '选择商品分类',
    },
    {
        title: '填写商品信息',
    },
    {
        title: '填写商品属性',
    },
    {
        title: '选择商品关联',
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
        if (current === 0) {
            // console.log(this.refs.s1)
        }
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
                <div className="steps-content">
                    {
                        (() => {
                            if (current === 0) {
                                return <RCascader />
                            } else if (current === 1) {
                                return <RCascader />
                            } else if (current === 2) {
                                return <RCascader />
                            } else if (current === 3) {
                                return <RCascader />
                            }
                        })()
                    }
                </div>
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
                        <Button type="primary" onClick={() => message.success('已完成提交')}>
                            完成
                        </Button>
                    )}

                </div>
            </>
        );
    }
}

export default GoodsSteps