import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import SiderComponent from '../components/sider'
import { DefaultLayout } from './default'
import { Layout } from 'antd'

export function DashboardLayout({ page, children }) {
  return (
    <DefaultLayout page={page}>
      <Layout>
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
      </Layout>
    </DefaultLayout>
  )
}

// import type { ReactNode } from 'react'
// import Header from '../components/header'
// import Footer from '../components/footer'
//       <Header />
//       <main>{children}</main>
//       <Footer copyright={null} />
//       <Center height="calc(100vh - 100px)">
//       </Center>
//     </DefaultLayout>
