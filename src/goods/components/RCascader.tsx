import React, { Component } from 'react';
import { Form, Input, Col, Row } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
// const tailLayout = {
//     wrapperCol: { offset: 8, span: 16 },
// };


class RCascader extends Component<any, any> {

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    onFinish = (values: any) => {
        console.log('Success:', values);
    };
    render() {

        return (
            <div>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                // onFinish={this.onFinish()}
                // onFinishFailed={this.onFinishFailed()}
                >
                    <Row gutter={8}>
                        <Col span={4}></Col>
                        <Col span={12}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}></Col>

                    </Row>
                    <Row gutter={8}>
                        <Col span={4}></Col>

                        <Col span={12}>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                        <Col span={8}></Col>

                    </Row>
                </Form>
            </div>
        )
    }
}

export default RCascader