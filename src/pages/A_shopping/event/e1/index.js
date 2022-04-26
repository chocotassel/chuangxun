import React from 'react'
import { NavBar, Space, Toast, SideBar, Badge } from 'antd-mobile'
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'

import './style.css'

import dress1 from '../../../../assets/icon/icon_chuang_e1_6/dress1.png'
import dress2 from '../../../../assets/icon/icon_chuang_e1_6/dress2.png'
import dress3 from '../../../../assets/icon/icon_chuang_e1_6/dress3.png'
import dress4 from '../../../../assets/icon/icon_chuang_e1_6/dress4.png'
import dress5 from '../../../../assets/icon/icon_chuang_e1_6/dress5.png'
import dress6 from '../../../../assets/icon/icon_chuang_e1_6/dress6.png'


import body from '../../../../assets/e1/body.png'


// import { tabsHome, tabsDress } from './tabs.js'


const right = (
  <div style={{ fontSize: 24 }}>
    <Space style={{ '--gap': '16px' }}>
      <SearchOutline />
      <MoreOutline />
    </Space>
  </div>
)

const tabsHome = [
  {
    key: 'key1',
    title: '连衣裙',
    badge: Badge.dot,
    img: dress1,
    go: '#sidebarDress1',
  },
  {
    key: 'key2',
    title: '上衣',
    img: dress2,
    go: '#sidebarDress2',
  },
  {
    key: 'key3',
    title: '下装',
    img: dress3,
    go: '#sidebarDress3',
  },
  {
    key: 'key4',
    title: '袜子',
    img: dress4,
    go: '#sidebarDress4',
  },
  {
    key: 'key5',
    title: '鞋子',
    img: dress5,
    go: '#sidebarDress5',
  },
  {
    key: 'key6',
    title: '饰品',
    img: dress6,
    go: '#sidebarDress6',
  },
]
const tabsDress = [
  {
    key: 'key1',
    title: '连衣裙',
    img: dress1,
    cloth: dress1,
  },
  {
    key: 'key2',
    title: '上衣',
    img: dress2,
    cloth: dress2,
  },
]


export default class User extends React.Component {
  state = {
    sideBar: '#sidebarHome',
    cloth: ''
  }

  back = () => {
    this.props.history.go(-1)
  }
    
  render() {
    return (
      <div>
          <NavBar
            style={{
              '--height': '36px',
              '--border-bottom': '1px #eee solid',
            }}
            onBack={this.back}
          >
            
          </NavBar>

          <div id='sidebar'>
            <div id='sidebarHome' className='sidebarHome'>
              {tabsHome.map(item => (
                <div 
                  key={item.key}
                  className='sidebarItem'
                  onClick={() => {
                    document.querySelector('#sidebarHome').style.display = 'none';
                    document.querySelector(item.go).style.display = 'flex';
                    this.setState({sideBar:item.go});
                  }}
                >
                  <img src={item.img} />
                  <div>{item.title}</div>
                </div>
              ))}
            </div>

            <div id='sidebarDress1' className='sidebarStyle'>
              {tabsDress.map(item => (
                <div
                  key={item.key}
                  className='sidebarItem'
                  onClick={() => {
                    document.querySelector('#bodycloth').src = dress1
                  }}
                >
                  <img src={item.img} />
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
            <div id='sidebarDress2' className='sidebarStyle'>
              {tabsDress.map(item => (
                <div
                  key={item.key}
                  className='sidebarItem'
                >
                  <img src={item.img} />
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
            <div id='sidebarDress3' className='sidebarStyle'>
              {tabsDress.map(item => (
                <div
                  key={item.key}
                  className='sidebarItem'
                >
                  <img src={item.img} />
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
            <div id='sidebarDress4' className='sidebarStyle'>
              {tabsDress.map(item => (
                <div
                  key={item.key}
                  className='sidebarItem'
                >
                  <img src={item.img} />
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
            <div id='sidebarDress5' className='sidebarStyle'>
              {tabsDress.map(item => (
                <div
                  key={item.key}
                  className='sidebarItem'
                >
                  <img src={item.img} />
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
            <div id='sidebarDress6' className='sidebarStyle'>
              {tabsDress.map(item => (
                <div
                  key={item.key}
                  className='sidebarItem'
                >
                  <img src={item.img} />
                  <div>{item.title}</div>
                </div>
              ))}
            </div>

          </div>

          <div id='figure' onClick={()=> {
            document.querySelector(this.state.sideBar).style.display = 'none'
            document.querySelector('#sidebarHome').style.display = 'flex'
            document.querySelector('#bodycloth').src = body
          }}>
            <img src={body} id='bodycloth' />
          </div>
      </div>
    )

  }
}