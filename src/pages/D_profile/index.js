import React, { useState, FC } from 'react'
import { Avatar, List, Divider, Grid, Card, Toast, Button, Mask, Space } from 'antd-mobile';
import { Route } from 'react-router-dom';


import qiandao from '../../assets/qiandao.png'
import night from '../../assets/font/night.png'
import setting from '../../assets/font/setting.png'

import touxiang from '../../assets/touxiang.png';


import icon11 from '../../assets/icon/icon_profile_1/p11.png'
import icon12 from '../../assets/icon/icon_profile_1/p12.png'

import icon21 from '../../assets/icon/icon_profile_2/p21.png'
import icon22 from '../../assets/icon/icon_profile_2/p22.png'
import icon23 from '../../assets/icon/icon_profile_2/p23.png'
import icon24 from '../../assets/icon/icon_profile_2/p24.png'
import icon25 from '../../assets/icon/icon_profile_2/p25.png'
import icon26 from '../../assets/icon/icon_profile_2/p26.png'
import icon27 from '../../assets/icon/icon_profile_2/p27.png'
import icon28 from '../../assets/icon/icon_profile_2/p28.png'

import icon31 from '../../assets/icon/icon_profile_3/p31.png'
import icon32 from '../../assets/icon/icon_profile_3/p32.png'
import icon33 from '../../assets/icon/icon_profile_3/p33.png'
import icon34 from '../../assets/icon/icon_profile_3/p34.png'
import icon35 from '../../assets/icon/icon_profile_3/p35.png'


import { AntOutline, RightOutline, SetOutline, EyeOutline } from 'antd-mobile-icons'


import './profile.css'
import { GridItem } from 'antd-mobile/es/components/grid/grid';



const WithContent: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div id='mask'>
      <Mask visible={visible} onMaskClick={() => setVisible(false)}>
        <div className='overlayContent'>内容</div>
      </Mask>
      {/* <Button>显示带内容的遮罩层</Button> */}
      <div onClick={() => setVisible(true)} id='maskIcon'>
            <img src={qiandao} />
            每日签到
          </div>
    </div>
  )
}


const card1 = [
  {
    id:1,
    num:76,
    fon:'关注',
    path:'/follow'
  },
  {
    id:2,
    num:0,
    fon:'粉丝',
    path:'/fans'
  },
  {
    id:3,
    num:6,
    fon:'推荐',
    path:'/recommend'
  }]




const card2 = [
  {
    id:1,
    title:'我的喜欢',
    img:icon11,
    path:''
  },
  {
    id:2,
    title:'我的收藏',
    img:icon12,
    path:''
  }
]



const card3 = [
  {id:1,icon:icon21,text:'收到的喜欢'},
  {id:2,icon:icon22,text:'评论'},
  {id:3,icon:icon23,text:'聊天'},
  {id:4,icon:icon24,text:'通知'},
  {id:5,icon:icon25,text:'历史记录'},
  {id:6,icon:icon26,text:'作品集'},
  {id:7,icon:icon27,text:'提问箱'},
  {id:8,icon:icon28,text:'帮助反馈'},
]

const cardList1 = [
  {text:'创作者中心',icon:icon31},
  {text:'头像框中心',icon:icon32},
  {text:'活动中心',icon:icon33}
]
const cardList2 = [
  {text:'我的钱包',icon:icon34},
  {text:'卡包',icon:icon35},
]


const Item = List.Item;
const Brief = Item.Brief;


const onClick = () => {
  Toast.show('点击了卡片')
}

const onHeaderClick = () => {
  Toast.show('点击了卡片Header区域')
}

const onBodyClick = () => {
  Toast.show('点击了卡片Body区域')
}



export default class Profile extends React.Component {
  state = {
    disabled: false,
  }

  renderCard1() {
    return card1.map(item => <div key={item.id} onClick={()=> this.props.history.push(item.path)}>
      <div>{item.num}</div>
      <div>{item.fon}</div>
    </div>)
  }
  renderCard2() {
    return card2.map(item => <div key={item.id} onClick={()=> this.props.history.push(item.path)}>
      <div>{item.title}</div>
      <img src={item.img} />
    </div>)
  }
  renderCard3() {
    return card3.map(item => <GridItem key={item.id} onClick={()=> this.props.history.push(item.path)}>
      <center>
        <img src={item.icon} />
        <div>{item.text}</div>
      </center>
    </GridItem>)
  }
  renderCardList1() {
    return cardList1.map(item => 
      <Card 
        key={item.text}
        title={
          <div style={{ fontWeight: 'normal' }}>
            <img src={item.icon} />
            <div>{item.text}</div>
          </div>
        }
        extra={<RightOutline />}
        onHeaderClick={onHeaderClick}
        style={{ borderRadius: '16px' }}
        >
      </Card>)
  }
  renderCardList2() {
    return cardList2.map(item => 
      <Card 
        key={item.text}
        title={
          <div style={{ fontWeight: 'normal' }}>
            <img src={item.icon} />
            <div>{item.text}</div>
          </div>
        }
        extra={<RightOutline />}
        onHeaderClick={onHeaderClick}
        style={{ borderRadius: '16px' }}
        >
      </Card>)
  }

  render() {
    return (
      <div id='profile'>
        <div id='profileFix'>
        <WithContent />
        {/* <img src={night} id='profile_top_night' /> */}
        {/* <img src={setting}  /> */}
        <EyeOutline id='profile_top_sleeping' fontSize={24} />
        <SetOutline id='profile_top_setting' fontSize={24}/>


        <div id='profileAvatar'>
          <div><Avatar src={touxiang} style={{ '--size': '62px','--border-radius': '31px' }}/></div>
          <div id='profileID'>
            <div>昵称</div>
            <div>id:10000001</div>
          </div>
          <div><RightOutline id='pRightArrow' /></div>
        </div>

        <div id='profile_card1'>{this.renderCard1()}</div>

        <Divider />
        <div id='profile_card2'>{this.renderCard2()}</div>
        {/* <Divider /> */}
        </div>
        <div id='profileBlank'></div>


        <Grid columns={4} gap={8} id='card3'>
          {this.renderCard3()}
        </Grid>

        <Divider />

        <div id='profile_card3'>{this.renderCardList1()}</div>
        <Divider />
        <div id='profile_card3'>{this.renderCardList2()}</div>

      </div>
    )
  }
}
