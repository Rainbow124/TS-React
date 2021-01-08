import React, { Component } from 'react'

import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


// const onFinish = (values: any) => {
//     console.log('Received values of form:', values);
//   };

class CreateForm extends Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {

        }
        // onFinish(values: any) {
        //     console.log('Received values of form:', values);
        // }
    }
    render() {
        return (
            <Form name="dynamic_form_nest_item" onFinish={() => { this.onFinish() }} autoComplete="off">
                <Form.List name="users">
                    {(fields, { add, remove }) => {
                        return (
                            <div>
                                {fields.map(field => (
                                    <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'first']}
                                            fieldKey={[field.fieldKey, 'first']}
                                            rules={[{ required: true, message: 'Missing first name' }]}
                                        >
                                            <Input placeholder="First Name" />
                                        </Form.Item>
                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'last']}
                                            fieldKey={[field.fieldKey, 'last']}
                                            rules={[{ required: true, message: 'Missing last name' }]}
                                        >
                                            <Input placeholder="Last Name" />
                                        </Form.Item>

                                        <MinusCircleOutlined
                                            onClick={() => {
                                                remove(field.name);
                                            }}
                                        />
                                    </Space>
                                ))}

                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        onClick={() => {
                                            add();
                                        }}
                                        block
                                    >
                                        <PlusOutlined /> Add field
                        </Button>
                                </Form.Item>
                            </div>
                        );
                    }}
                </Form.List>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                </Button>
                </Form.Item>
            </Form>
        );
    }
    onFinish() {
        throw new Error("Method not implemented.");
    }
}

export default CreateForm