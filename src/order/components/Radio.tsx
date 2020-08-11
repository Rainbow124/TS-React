import React, { Component } from 'react';
import { Radio } from 'antd';

interface Columns {
    [columns: string]: any,
}

class SelectRadio extends Component {
    state = {
      value: 1,
    };
  
    onChange = (e:any) => {
      console.log('radio checked', e.target.value);
      this.setState({
        value: e.target.value,
      });
    };
  
    render() {
      return (
        <Radio.Group onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>全部订单</Radio>
          <Radio value={2}>待付款</Radio>
          <Radio value={3}>待发货</Radio>
          <Radio value={4}>已发货</Radio>
          <Radio value={5}>已完成</Radio>
        </Radio.Group>
      );
    }
  }

export default SelectRadio;