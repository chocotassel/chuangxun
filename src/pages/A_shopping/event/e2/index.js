import React from 'react'
import { NavBar, Space, Toast, Button } from 'antd-mobile'
import { SearchOutline, HeartOutline, LeftOutline} from 'antd-mobile-icons'

import './style.css'


import vote1 from '../../../../assets/e2/vote1.png'
import vote2 from '../../../../assets/e2/vote2.png'



const right = (
  <div style={{ fontSize: 24 }}>
    <Space style={{ '--gap': '16px' }}>
      <HeartOutline />
    </Space>
  </div>
)

const voteBox = [
  {
    id: 1,
    img: vote1,
  },
  {
    id: 2,
    img: vote2,
  },
  {
    id: 3,
    img: vote2,
  },
  {
    id: 4,
    img: vote2,
  },
]


export default class User extends React.Component {

  back = () => {
    this.props.history.go(-1)
  }

    
  render() {
    return (
      <div id='e2'>
          <NavBar
            style={{
              '--height': '36px',
              '--border-bottom': '1px #eee solid',
            }}
            backArrow={<LeftOutline />} 
            right={right} 
            onBack={this.back}
          >
            国潮计划
          </NavBar>


          <div id='e2_ruler'>
            <div>投票时间：2021/10/28-2021/11/18</div>
            <div>活动规则：每位参与者每天可投10票，快来pick你的最爱</div>
          </div>

          <div id='e2_voteBox'>
            {voteBox.map(item => (
              <div
                key={item.id}
                className='e2_voteBoxItem'
              >
                <img src={item.img} />
                <Button 
                  className='voteButton'
                  block color='primary' 
                  size='large' 
                  disabled
                  style={{
                    '--border-radius': '30px'
                }}>
                  投票已结束
                </Button>
              </div>
            ))}
          </div>
      </div>
    )

  }
}