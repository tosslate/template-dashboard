
// import Layout from 'antd/lib/layout'
import { Layout } from 'tdesign-react'
// import HeaderDropdown from './header-dropdown'

export default function Header(params) {
  return (
    <Layout.Header className="bg-white shadow px-12 z-50">
      <div className="flex items-center h-full">
        <div className="flex flex-auto flex-row-reverse items-center">
          {/* <HeaderDropdown /> */}
        </div>
      </div>
    </Layout.Header>
  )
}
