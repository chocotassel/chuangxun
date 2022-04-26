import React from 'react'
import { NavBar, Space, Toast, Avatar, List, Card, Divider } from 'antd-mobile'
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'
import { AntOutline, RightOutline } from 'antd-mobile-icons'


import './style.css'


import headportrait from '../../../assets/touxiang.png'



const right = (
  <div style={{ fontSize: 24 }}>
    <Space style={{ '--gap': '16px' }}>
      <SearchOutline />
      <MoreOutline />
    </Space>
  </div>
)


export default class User extends React.Component {

  back = () => {
    this.props.history.go(-1)
  }
    
  render() {
    return (
      <div id='service_vip'>
          <NavBar
            style={{
              '--height': '36px',
              '--border-bottom': '1px #eee solid',
            }}
            onBack={this.back}
          >
            会员中心
          </NavBar>

          <div id='service_vip_headportrait' >
            <Avatar src={headportrait} style={{'--border-radius': '4vh'}} />
            <div>chocotassel</div>
          </div>

          <Card
            title={
              <div style={{ fontWeight: 'normal' }}>
                {/* <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} /> */}
                我的订单
              </div>
            }
            extra={<div>全部 <RightOutline /></div>}
            onHeaderClick={() => this.props.history.push('/home/myorder')}
            style={{ borderRadius: '16px' }}
          >
            <div id='service_vip_card2'>
              <div>
                <img />
                <div>待支付订单</div>
              </div>
              <div>
                <img />
                <div>已支付订单</div>
              </div>
            </div>
          </Card>

          {/* <Divider /> */}

          <div id='service_vip_card3'>
            <div>
              <img />
              <div>我的优惠券</div>
            </div>
            <div>
              <img />
              <div>我的收获地址</div>
            </div>
            <div>
              <img />
              <div>在线客服</div>
            </div>
          </div>
      </div>
    )

  }
}