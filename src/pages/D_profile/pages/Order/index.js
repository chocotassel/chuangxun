import React from 'react'
import { NavBar, Space, Toast } from 'antd-mobile'
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'

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
    this.props.history.go(-1);
    console.log(this.props)
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
            标题
          </NavBar>
      </div>
    )

  }
}