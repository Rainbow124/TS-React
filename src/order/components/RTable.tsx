import React, { Component } from 'react';
import { Table } from 'antd';

interface Columns {
    [columns: string]: any,
}
const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    // getCheckboxProps: (record: any) => ({
    //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
    //     name: record.name,
    // }),
};

class RTable extends Component<Columns>{
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Table
                    rowSelection={{
                        type: 'checkbox',
                        ...rowSelection,
                    }}
                    columns={this.props.columns}
                    dataSource={this.props.dataSource}
                />
            </div>
        )
    }
}

export default RTable;
