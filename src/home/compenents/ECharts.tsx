import React, { Component } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

interface Charts {
    [chartId: string]: any
}

class EchartsTest extends Component<Charts> {
    constructor(props: any) {
        super(props)
        // console.log(props)

    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        let mainId = document.getElementById(this.props.chartId)
        let myChart = echarts.init(mainId as HTMLCanvasElement);
        // 绘制图表
        

        myChart.setOption(this.props.option);
    }

    render() {
        return (
            <div>
                <div id={this.props.chartId} style={{ width: 620, height: 620 }}></div>
            </div>

        );
    }
}

export default EchartsTest;