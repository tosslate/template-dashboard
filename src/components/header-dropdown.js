import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'antd/lib/dropdown'
import Avatar from 'antd/lib/avatar'
import Space from 'antd/lib/space'
import Menu from 'antd/lib/menu'
import { DownOutlined } from '@ant-design/icons'

class HeaderDropdown extends Component {
  render() {
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
}

export default HeaderDropdown
