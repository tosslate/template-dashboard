// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import Dropdown from 'antd/lib/dropdown'
// import Avatar from 'antd/lib/avatar'
// import Space from 'antd/lib/space'
// import Menu from 'antd/lib/menu'
// import { DownOutlined } from '@ant-design/icons'

export default function HeaderDropdown() {
  return (
    <Dropdown overlay={<Menu>
      <Menu.Item>
        <Link to="/user/profile">Your profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/sign-out">Sign out</Link>
      </Menu.Item>
    </Menu>} placement="bottomRight">
      <Space className="cursor-pointer">
        <Avatar src="https://i2.wp.com/ui-avatars.com/api/applause" />
        <span className="select-none">applause</span>
        <DownOutlined className="text-xs" />
      </Space>
    </Dropdown>
  )
}

// <template>
//   <a-dropdown placement="bottomRight">
//     <a-space class="cursor-pointer">
//       <a-avatar src="https://i2.wp.com/ui-avatars.com/api/applause"></a-avatar>
//       <span class="select-none">applause</span>
//       <down-outlined class="text-xs"></down-outlined>
//     </a-space>
//     <template #overlay>
//       <a-menu>
//         <a-menu-item>
//           <router-link to="/user/profile">Your profile</router-link>
//         </a-menu-item>
//         <a-menu-item>
//           <router-link to="/settings">Settings</router-link>
//         </a-menu-item>
//         <a-menu-item>
//           <router-link to="/sign-out">Sign out</router-link>
//         </a-menu-item>
//       </a-menu>
//     </template>
//   </a-dropdown>
// </template>

// <script>
// import axios from 'axios'
// import { message } from 'ant-design-vue'
// import { DownOutlined } from '@ant-design/icons-vue'
