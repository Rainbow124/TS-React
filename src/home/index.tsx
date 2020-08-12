import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Progress } from 'antd';
import {LineChartOutlined} from '@ant-design/icons';
import Echarts from './components/ECharts'
import RTable from './components/RTable'

import './index.scss'

class SiderDemo extends Component<any> {
  [x: string]: any
  child: any = {}  //主要加这个
  onRef = (ref: any) => {
    this.child = ref
  }
  state = {
    collapsed: false,
    chartId1: 'chartId1',
    chartId2: 'chartId2',
    option1: {
      title: {
        text: '每日销售订单'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#feb197'
          }
        }
      },

      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      dataRange: {
        color: ['#feb197'],//颜色 
      },
      axisLine: {            // 坐标轴线
        show: false,        // 默认显示，属性show控制显示与否
        lineStyle: {       // 属性lineStyle控制线条样式
          color: '#ccc',
          width: 1,
          type: 'solid'
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
          data: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
          axisTick: {
            show: false,
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisTick: {
            show: false,
          }
        }
      ],
      series: [
        {
          name: '日销量',
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
          areaStyle: {
            normal: {
              color: '#feb197' //改变区域颜色
            }
          },
          itemStyle: {
            normal: {
              color: '#feb197', //改变折线点的颜色
              lineStyle: {
                color: '#feb197' //改变折线颜色
              }
            }
          },
          data: [200, 150, 165, 250, 330, 300, 160, 68, 600, 360, 350]
        }
      ]
    },
    option2: {
      title: {
        text: '年销售额'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#8ce5d9'
          }
        }
      },

      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      dataRange: {
        color: ['#8ce5d9'],//颜色 
      },
      axisLine: {            // 坐标轴线
        show: false,        // 默认显示，属性show控制显示与否
        lineStyle: {       // 属性lineStyle控制线条样式
          color: '#ccc',
          width: 1,
          type: 'solid'
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
          data: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          axisTick: {
            show: false,
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisTick: {
            show: false,
          }
        }
      ],
      series: [
        {
          name: '年销售额',
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
          areaStyle: {
            normal: {
              color: '#8ce5d9' //改变区域颜色
            }
          },
          itemStyle: {
            normal: {
              color: '#8ce5d9', //改变折线点的颜色
              lineStyle: {
                color: '#8ce5d9' //改变折线颜色
              }
            }
          },
          data: [38000, 55000, 60901, 41934, 43290, 61330, 101320, 111563, 80435, 58003, 60000]
        }
      ]
    },
    columns: [
      {
        title: '头像',
        dataIndex: 'avatar',
        key: 'avatar',
      },
      {
        title: '下单时间',
        dataIndex: 'time',
        key: 'time',
      },

      {
        title: '件数',
        key: 'count',
        dataIndex: 'count',
      },
      {
        title: '金额',
        key: 'money',
        dataIndex: 'money',
      },
    ],
    data: [
      {
        key: '1',
        avatar: 'Rainbow',
        time: '2020-8-11',
        count: 32,
        money: '300',
      },
      {
        key: '2',
        avatar: 'Rainbow',
        time: '2020-8-11',
        count: 32,
        money: '300',
      },
      {
        key: '3',
        avatar: 'Rainbow',
        time: '2020-8-11',
        count: 32,
        money: '300',
      },
      {
        key: '4',
        avatar: 'Rainbow',
        time: '2020-8-11',
        count: 32,
        money: '300',
      },
      {
        key: '5',
        avatar: 'Rainbow',
        time: '2020-8-11',
        count: 32,
        money: '300',
      },
      {
        key: '6',
        avatar: 'Rainbow',
        time: '2020-8-11',
        count: 32,
        money: '300',
      },
      {
        key: '7',
        avatar: 'Rainbow',
        time: '2020-8-11',
        count: 32,
        money: '300',
      }
    ]
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  go = ({ item, key, keyPath, domEvent }: any) => { //onClik那里虽然看不到传值,但是默认会传过来四个参数,详见官网
    console.log(item, key, keyPath, domEvent)
    this.props.history.push(key)   //编程式导航
  }
  render() {
    return (
      <div>
        <div className="content-head">
        <div className="card card1">
          <div className="card-top">
            <span>每周销售</span>
            <span><LineChartOutlined /></span>
          </div>
          <div className="card-center">
            ￥ 30,000
                  </div>
          <div className="card-bottom">
            增加10%
                  </div>
        </div>
        <div className="card card2">
          <div className="card-top">
            <span>每周订单</span>
            <span><LineChartOutlined /></span>
          </div>
          <div className="card-center">
            1,260
                  </div>
          <div className="card-bottom">
            增加3%
                  </div>
        </div>
        <div className="card card3">
          <div className="card-top">
            <span>在线访问量</span>
            <span><LineChartOutlined /></span>
          </div>
          <div className="card-center">
            3,650
                  </div>
          <div className="card-bottom">
            减少5%
                  </div>
        </div>
        <div className="card card4">
          <div className="card-top">
            <span>新增用户</span>
            <span><LineChartOutlined /></span>
          </div>
          <div className="card-center">
            1,328
                  </div>
          <div className="card-bottom">
            增加8%
                  </div>
        </div>
      </div>
      <div className="content-conter">
        <div className="content-left">
          <div >
            <Echarts chartId={this.state.chartId1} option={this.state.option1} />
          </div>
        </div>
        <div className="content-right">
          <span className='side-title'>订单概述</span>
          <div className='year-total'>
            <h1 className='amount'>1620</h1>
            <span>总订单量（周）</span>
          </div>
          <div>
            <div className='progress'>
              <h2>30%</h2>
              <span>在线订购</span>
              <Progress percent={30} showInfo={false} strokeWidth={20} strokeColor='#ca81ed' strokeLinecap='square' />
            </div>
            <div className='progress'>
              <h2>50%</h2>
              <span>离线订购</span>
              <Progress percent={50} showInfo={false} strokeWidth={20} strokeColor='#8ce5d9' strokeLinecap='square' />
            </div>
            <div className='progress'>
              <h2>20%</h2>
              <span>年度储蓄</span>
              <Progress percent={20} showInfo={false} strokeWidth={20} strokeColor='#feb197' strokeLinecap='square' />
            </div>
          </div>
        </div>
      </div>
      <div className="content-conter">
        <div className="content-left">
          <div >
            <Echarts chartId={this.state.chartId2} option={this.state.option2} />
          </div>
        </div>
        <div className="content-right">
          <div className='real-time-information'>
            <div>
              <span className='side-title'>实时战报</span>
              <div className='order-quantities'>
                <h1 className='amount'>39</h1>
                <span>今日下单数</span>
              </div>
            </div>
            <div>
              <Progress type="circle" percent={30} strokeWidth={10} width={100} />
              <p className='percent'>下单转化率</p>
            </div>
          </div>
          <div className=''>
            <RTable columns={this.state.columns} dataSource={this.state.data} />
          </div>
        </div>
      </div>
      </div>
    )
  }

}
export default SiderDemo