// import React from 'react'
// import './style.css';
// import { List, NavBar, Icon } from 'antd-mobile';

// const Item = List.Item;
// const Brief = Item.Brief;

// export default class ListExample extends React.Component {
//   state = {
//     disabled: false,
//   }

//   render() {
//     return (<div>
//       <NavBar
//         mode="light"
//         icon={<Icon type="left" />}
//         onLeftClick={() => this.props.history.go(-1)}
//         rightContent={[
//           // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
//           <Icon key="1" type="ellipsis" />,
//       ]}
//       >消息</NavBar>
//       <div id='blank'></div>
//       <List  className="my-list">
//         {/* renderHeader={() => 'Customized Right Side（Empty Content / Text / Image）'} */}
//         <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
//           Title <Brief>subtitle</Brief>
//         </Item>
//         <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
//           Title <Brief>subtitle</Brief>
//         </Item>
//         <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
//           Title <Brief>subtitle</Brief>
//         </Item>
//         <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
//           Title <Brief>subtitle</Brief>
//         </Item>
//         <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
//           Title <Brief>subtitle</Brief>
//         </Item>
//         <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
//           Title <Brief>subtitle</Brief>
//         </Item>
//         <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
//           Title <Brief>subtitle</Brief>
//         </Item>
//         <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
//           Title <Brief>subtitle</Brief>
//         </Item>
//         <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
//           Title <Brief>subtitle</Brief>
//         </Item>
//         <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
//           Title <Brief>subtitle</Brief>
//         </Item>
//         <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
//           Title <Brief>subtitle</Brief>
//         </Item>
//         <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
//           Title <Brief>subtitle</Brief>
//         </Item>


//       </List>
//     </div>);
//   }
// }

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
            标题
          </NavBar>
      </div>
    )

  }
}