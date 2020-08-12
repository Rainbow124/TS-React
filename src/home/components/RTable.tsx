

import React, { Component } from 'react';
import { Table } from 'antd';

interface Columns {
    [columns: string]: any,
}

class RTable extends Component <Columns>{
    
    render() {
        console.log(this.props)
        return (
            <Table columns={this.props.columns} dataSource={this.props.dataSource} />
        )
    }
}

export default RTable;
