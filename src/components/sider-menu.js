import React, { Component } from 'react'
import Menu from 'antd/lib/menu'

class SiderMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openKeys: [],
      selectedKeys: []
    }
  }

  render() {
    return (
      <Menu theme="dark" mode="inline" inlineIndent={0}>
        <Menu.Item>
          <span className="select-none px-6">Dashboard</span>
        </Menu.Item>
        <Menu.SubMenu title={<span className="font-bold text-sm text-gray-600 tracking-widest uppercase select-none px-6">RESOURCES</span>}>
          <Menu.Item>
            <span className="select-none px-6">Networks</span>
          </Menu.Item>
          <Menu.Item>
            <span className="select-none px-6">Databases</span>
          </Menu.Item>
          <Menu.Item>
            <span className="select-none px-6">Caches</span>
          </Menu.Item>
          <Menu.Item>
            <span className="select-none px-6">Domains</span>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )
  }
}

export default SiderMenu
