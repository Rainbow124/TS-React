import React, { Component } from 'react';
import { Form, Input, Col, Row, Select } from 'antd';

const { Option } = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
// const tailLayout = {
//     wrapperCol: { offset: 8, span: 16 },
// };


class RCascader extends Component<any, any> {
    // const { getFieldDecorator } = this.props.form;

    constructor(props:any){
        super(props)
        this.state= {
            name: 'abc'
        }
    }

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
                        <Col span={10}></Col>
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
                    <Row gutter={8}>
                        <Col span={4}></Col>
                        <Col span={12}>
                            <Form.Item
                                label="GrilFirends"
                                name="GrilFirends"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >

                                <Select defaultValue="lucy"  style={{width:"100%"}}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled">
                                        Disabled
                                    </Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
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