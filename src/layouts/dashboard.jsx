import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import SiderComponent from '../components/sider'
import DefaultLayout from '../layouts/default'
import { Layout } from 'tdesign-react'

export default function DashboardLayout({ page, children }) {
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
