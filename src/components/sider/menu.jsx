// import React, { Component } from 'react'
// import { Menu } from 'tdesign-react'
import { Menu } from 'tdesign-react'
// import Menu from 'antd/lib/menu'

export default function SiderMenu(params) {
  return (
    <Menu theme="dark" mode="inline" inlineIndent={0}>
      <Menu.MenuItem>
        <span className="select-none px-6">Dashboard</span>
      </Menu.MenuItem>
      <Menu.SubMenu title={<span className="font-bold text-sm text-gray-600 tracking-widest uppercase select-none px-6">RESOURCES</span>}>
        <Menu.MenuItem>
          <span className="select-none px-6">Networks</span>
        </Menu.MenuItem>
        <Menu.MenuItem>
          <span className="select-none px-6">Databases</span>
        </Menu.MenuItem>
        <Menu.MenuItem>
          <span className="select-none px-6">Caches</span>
        </Menu.MenuItem>
        <Menu.MenuItem>
          <span className="select-none px-6">Domains</span>
        </Menu.MenuItem>
      </Menu.SubMenu>
    </Menu>
  )
}

//       openKeys: [],
//       selectedKeys: []
