import type { ReactNode } from 'react'
// import Header from '../components/header'
// import Footer from '../components/footer'
// import HeaderComponent from '../components/header'
// import FooterComponent from '../components/footer'
// import SiderComponent from '../components/sider'
import { Layout } from './default'
// import { Layout } from 'antd'

export function Dashboard({ page, children }) {
  return (
    <Layout page={page}>
      {/* <Layout>
        <Layout.Aside className="bg-stone-900" width={256}>
          <SiderComponent />
        </Layout.Aside>
        <Layout>
          <Layout.Header className="bg-zinc-100">
            <HeaderComponent />
          </Layout.Header>
          <Layout.Content className="bg-zinc-100">{children}</Layout.Content>
          <Layout.Footer className="bg-zinc-100">
            <FooterComponent copyright="Copyright © 2022 Tosslate Inc." />
          </Layout.Footer>
        </Layout>
      </Layout> */}
    </Layout>
  )
}

//       <Header />
//       <main>{children}</main>
//       <Footer copyright={null} />
