import React, { Component } from 'react'
import Steps from './components/Steps'


class Goods extends Component {
    render() {
        return (
            <div>
                <h1 className='goods-title'>商品分类</h1>
                <div>
                    <Steps />
                </div>
            </div>
        )
    }
}

export default Goods