import searchFont_sousuo from '../../assets/font/sousuo.png'
import searchFont_camera from '../../assets/font/camera.png'
import './shopping.css'

import pN1 from '../../assets/productNav/1.png'
import pN2 from '../../assets/productNav/2.png'
import pN3 from '../../assets/productNav/3.png'
import pN4 from '../../assets/productNav/4.png'
import pN5 from '../../assets/productNav/5.png'

import point from '../../assets/point.png'

import event1 from '../../assets/event1.png';
import event2 from '../../assets/event2.png';


import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { SearchBar, Button, PageIndicator, Space, Swiper, Card, Toast  } from 'antd-mobile';
import { MoreOutline } from 'antd-mobile-icons'


// import E1 from './event/e1'
// import E2 from './event/e2'

import circleArrow from '../../assets/double-right-arrow.png'


class Search extends React.Component {
    state = {
        txt:''
    }

    handleChange = e => {
        this.setState({
            txt:e.target.value
        })
    }

    render() {
        return (
            <div id='search_box'>
                <img src={searchFont_sousuo} className='search_icon_sousuo'/>
                <input type="text" value={this.state.txt} onChange={this.handleChange} className='search_input'></input>
                <img src={searchFont_camera} className='search_icon_camera'/>
            </div>
        )
    }
}
const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className='aSwiper'
      style={{ background: color }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))






const productNavItems = [
  {
    key:1,
    img:pN1,
  },
  {
    key:2,
    img:pN2,
  },
  {
    key:3,
    img:pN3,
  },
  {
    key:4,
    img:pN4,
  },
  {
    key:5,
    img:pN5,
  },
]
const productItems = [
  {
    key:1,
    img:pN1,
    name: '衣服',
    price: '100',
    pays: '20',
    more: ''
  },
  {
    key:2,
    img:pN2,
    name: '衣服',
    price: '200',
    pays: '20',
    more: ''
  },
  {
    key:3,
    img:pN3,
    name: '衣服',
    price: '300',
    pays: '20',
    more: ''
  },
  {
    key:4,
    img:pN4,
    name: '衣服',
    price: '99',
    pays: '20',
    more: ''
  },
  {
    key:5,
    img:pN5,
    name: '衣服',
    price: '88',
    pays: '20',
    more: ''
  },
]

class ProductBox extends React.Component {
  state = {
    selectedNavItem:1,
    display:false
  }
  isSelectedNavItem = (item) => {
    if(this.state.selectedNavItem === item.key) return 'block'
    else return 'none'
  }

  handleCardClick = () => {
    Toast.show('点击了卡片')
  }


  renderProductNavItems = () => {
    return productNavItems.map(item=> (
      <div 
        className='productNavItems' 
        key={item.key}
        onClick={() => this.setState({selectedNavItem:item.key})}
      >
        <img src={item.img} className='productNavItemsImg' />
        <div className={this.state.selectedNavItem == item.key?"productNavPoint":"none"}>
          <img src={point} />
        </div>
      </div>
    ))
  }
  renderProductItems = () => {
    return productItems.map(item => (
      <div 
        className='productCard'
          key={item.key}
          onClick={this.handleCardClick} 
      >
        <img src={item.img} />

        <div className='productBrief'>
          <div>{item.name}</div>
          <div>
            <div>￥{item.price}</div>
            <div>{item.pays}人付款</div>
          </div>
          <div>{item.more}</div>
          <MoreOutline />
        </div>

      </div>
    ))
  }


  render() {
    return (
      <div id='productBox'>
        <div id='productNav'>
          {this.renderProductNavItems()}
        </div>
        <Swiper id='aSwiperCard' loop autoplay>{items}</Swiper>
        {this.renderProductItems()}
      </div>
    )
  }  
}




export default class Chuang extends React.Component {
  handleE1 = () => {this.props.history.push('/home/event1')}
  handleE2 = () => {this.props.history.push('/home/event2')}

  render() {
    return (
      <div>
        <div id='chuang_bg'></div>
        
        {/* <Route path="/home/event1" component={E1} />
        <Route path="/home/event2" component={E2} /> */}

        <Search />
        {/* <Swiper
          style={{
            '--track-padding': ' 0 0 16px',
          }}
          indicator={(total,current) => (
              <PageIndicator
                className='customIndicator'
                total={total} 
                current={current}
                style={{
                  '--dot-color': 'rgba(0, 0, 0, 0.3)',
                  '--active-dot-color': 'rgba(0, 0, 0, 0.4)',
                  '--dot-size': '8px',
                  '--active-dot-size': '35px',
                  '--dot-border-radius': '50%',
                  '--active-dot-border-radius': '15px',
                  '--dot-spacing': '14px',
                }}
              />      
          )}
        >
          <Swiper.Item key={1}>
            <div id='chuang_top_blank'></div>
            <div className='content'>
                <ProductBox />
              <div id='chuang_bottom_blank'></div>
            </div>
          </Swiper.Item>
          <Swiper.Item key={2}>
            <div id='chuang_top_blank'></div>
            <div className='content'>

                <div className='event' onClick={this.handleE1} >
                  <img src={event1}/>
                  <div className='eventFont'>点击查看详情</div>
                  <img src={circleArrow} />
                </div>

                <div className='event' onClick={this.handleE2} >
                  <img src={event2}/>
                  <div className='eventFont'>点击查看详情</div>
                  <img src={circleArrow} />
                </div>

            </div>
          </Swiper.Item>
        </Swiper> */}

          {/* <div id='chuang_top_blank'></div> */}

        
      
       <ProductBox />
        <div id='chuang_bottom_blank'></div>

      </div>
    )
  }
  
}



