import React, { Component } from 'react'
import Layout from 'antd/lib/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Sider from '../components/sider'

class DashboardLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider />
        <Layout className="bg-gray-200">
          <Header />
          <Layout.Content>
            {
              this.props.children
            }
          </Layout.Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}

export default DashboardLayout
