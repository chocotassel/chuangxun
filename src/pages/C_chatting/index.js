import React from 'react'
import {Link, Route } from 'react-router-dom';

import menu from '../../assets/menu.png'
import atme from '../../assets/icon/icon_community/c1.png'
import comment from '../../assets/icon/icon_community/c2.png'
import like from '../../assets/icon/icon_community/c3.png'
import rightArrow from '../../assets/right-arrow.png'

import { Badge, NavBar, Space, List, Avatar, Divider  } from 'antd-mobile';
import { AddOutline  } from 'antd-mobile-icons'

import './chatting.css'



const right = (
  <div style={{ fontSize: 24 }}>
    <Space style={{ '--gap': '16px' }}>
      <AddOutline />
    </Space>
  </div>
)

const tab = [
  {
    ava:menu,
    id:"市集小秘书",
    message:"天官赐福，百无禁忌！《天官赐福...",
    time:'21小时前',
    path: '',
  },
  {
    ava:menu,
    id:"创寻之家通知",
    message:"本命穿越后从二次元扩列到了三次...",
    time:'昨天',
    path: '',
  },
  {
    ava:menu,
    id:"创寻之家朋友圈",
    message:"扩圈的机会来了！亲爱的视频创作...",
    time:'10-28',
    path: '',
  },
  {
    ava:menu,
    id:"创寻之家创作管家",
    message:"Hi容影，回归礼法面向全体...",
    time:'10-21',
    path: '',
  },
  {
    ava:menu,
    id:"创寻之家用户服务",
    message:"“小猫咪能有什么怀心思呢~?”",
    time:'09-24',
    path: '',
  },
  {
    ava:menu,
    id:"创寻之家话题",
    message:"2019年你的课本上有（奇怪形状的...",
    time:'04-27',
    path: '',
  },
  {
    ava:menu,
    id:"创寻之家会员服务",
    message:"【请记录2019】很多人说：“没有表...",
    time:'2021-10-24',
    path: '',
  },
  {
    ava:menu,
    id:"创寻小秘书",
    message:"亲爱的用户，为了更好的帮助您提...",
    time:'2021-10-24',
    path: '',
  },
  {
    ava:menu,
    id:"创寻之家客服",
    message:"有奖问答！！！",
    time:'2021-10-24',
    path: '',
  },
]

export default class Community extends React.Component {
  renderChatBox() {
    return tab.map(item => 
      <div className='chatBox' key={item.id} onClick={() => this.props.history.push(item.path)}>
        <Avatar />
        <div className='chatBoxRight'>
          <div>{item.id}</div>
          <div>{item.message}</div>
          <div className='chatBoxTime'>{item.time}</div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div id='community'>
        <NavBar right={right} backArrow={false} >
          消息
        </NavBar>
        <div id='msg'>
          <div className='msgbox'>
              <div className='msgboxBgc'><img src={atme} /></div>
              <div>@我的</div>
            </div>
            <div className='msgbox'>
              <div className='msgboxBgc'><img src={comment} /></div>
              <div>评论</div>
              </div>  
            <div className='msgbox'>
              <div className='msgboxBgc'><img src={like} /></div>
              <div>赞</div>
            </div>
          </div>

          {/* <Divider /> */}
          {/* <List>
        </List> */}
        <div id='chatList'>
            {this.renderChatBox()}
        </div>
      </div>
    )
  }
}