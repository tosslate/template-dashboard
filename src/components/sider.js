import React, { Component } from 'react'
import Layout from 'antd/lib/layout'
import SiderMenu from './sider-menu'
import styles from './sider.module.css'

class Sider extends Component {
  render() {
    return (
      <Layout.Sider className="h-screen" width={256}>
        <div className="h-16"></div>
        <SiderMenu />
      </Layout.Sider>
    )
  }
}

export default Sider
