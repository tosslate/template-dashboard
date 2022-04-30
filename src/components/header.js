import React, { Component } from 'react'
import Layout from 'antd/lib/layout'
import HeaderDropdown from './header-dropdown'

class Header extends Component {
  render() {
    return (
      <Layout.Header className="bg-white shadow px-12 z-50">
        <div className="flex items-center h-full">
          <div className="flex flex-auto flex-row-reverse items-center">
            <HeaderDropdown />
          </div>
        </div>
      </Layout.Header>
    )
  }
}

export default Header
