import React from 'react'
import { Route, Link } from 'react-router-dom';

import Shopping from '../A_shopping';
import Community from '../B_community';
import Chatting from '../C_chatting';
import Profile from '../D_profile';


import tabbar_1 from '../../assets/tabbar/tabbar_1.png'
import tabbar_1s from '../../assets/tabbar/tabbar_1s.png'
import tabbar_2 from '../../assets/tabbar/tabbar_2.png'
import tabbar_2s from '../../assets/tabbar/tabbar_2s.png'
import tabbar_3 from '../../assets/tabbar/tabbar_3.png'
import tabbar_3s from '../../assets/tabbar/tabbar_3s.png'
import tabbar_4 from '../../assets/tabbar/tabbar_4.png'
import tabbar_4s from '../../assets/tabbar/tabbar_4s.png'

import { TabBar, Space } from 'antd-mobile'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'


import './index.css'


import E1 from '../A_shopping/event/e1'
import E2 from '../A_shopping/event/e2'





const tabItems = [
  {
    title: '首页',
    icon: 'icon-ind',
    path: '/home',
    img:tabbar_1,
    imgSelected:tabbar_1s
  },
  {
    title: '社区',
    icon: 'icon-findHouse',
    path: '/home/community',
    img:tabbar_2,
    imgSelected:tabbar_2s
  },
  {
    title: '服务',
    icon: 'icon-infom',
    path: '/home/chatting',
    img:tabbar_3,
    imgSelected:tabbar_3s
  },
  {
    title: '我的',
    icon: 'icon-my',
    path: '/home/profile',
    img:tabbar_4,
    imgSelected:tabbar_4s
  }
]

export default class Home extends React.Component {
  state = {
    // 默认选中的TabBar菜单项
    selectedTab: this.props.location.pathname
  }

  renderTabbar() {
    return tabItems.map(item => 
    <div 
      className='tabbarItem'
      key={item.title} 
      // selected={}
      onClick={()=> {
        this.props.history.push(item.path)
        this.setState({selectedTab:item.path})
      }
      }
    ><center>
        <img src={this.state.selectedTab === item.path?item.imgSelected:item.img} /></center>
    </div>)
  }

  render() {
    return (
      <div className="home">
        {/* 2.3 渲染子路由 */}
        <Route exact path="/home" component={Shopping} />
        <Route path="/home/community" component={Community} />
        <Route path="/home/chatting" component={Chatting} />
        <Route path="/home/profile" component={Profile} />


        <Route path="/home/event1" component={E1} />
        <Route path="/home/event2" component={E2} />


        <div id='tabbar'>
          {this.renderTabbar()}
        </div>
        <div id='tabbarBlank'></div>

      </div>
    )
  }
}
