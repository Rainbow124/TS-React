import React, { Component } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class EchartsTest extends Component {
    // constructor(props: any) {
    //     super(props)
    // }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        let mainId = document.getElementById('orderForm1')
        let myChart = echarts.init(mainId as HTMLCanvasElement);
        // 绘制图表
        let option: any = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['10', '11', '12', '13', '14', '15', '16']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '搜索引擎',
                    type: 'line',
                    symbol: 'none', //这句就是去掉点的
                    smooth: true, //这句就是让曲线变平滑的
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {},
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };

        myChart.setOption(option);
    }

    render() {
        return (
            <div id='orderForm1' style={{ width: 420, height: 420 }}></div>
        );
    }
}

export default EchartsTest;