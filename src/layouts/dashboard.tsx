import type { ReactNode } from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
// import SiderComponent from '../components/sider'
import { Layout } from './default'
import { Layout as AntLayout } from 'antd'

export function Dashboard({ page, children }) {
  return (
    <Layout page={page}>
      <AntLayout>
        <AntLayout.Sider></AntLayout.Sider>
        <AntLayout>
          <AntLayout.Header>
            <Header />
          </AntLayout.Header>
          <AntLayout.Content>{children}</AntLayout.Content>
          <AntLayout.Footer>
            <Footer copyright="Copyright © 2022 Tosslate Inc." />
          </AntLayout.Footer>
        </AntLayout>
      </AntLayout>
      {/* <Layout>
        <Layout.Aside className="bg-stone-900" width={256}>
        </Layout.Aside>
      </Layout> */}
    </Layout>
  )
}

//       <Header />
//       <main>{children}</main>
//       <Footer copyright={null} />
