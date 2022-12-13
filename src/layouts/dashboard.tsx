import type { LayoutProps } from './default'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Sider } from '../components/sider'
import { Layout } from './default'

export function Dashboard({ page, children }: LayoutProps) {
  return (
    <Layout page={page}>
      <div className="flex">
        <div className="bg-zinc-100 h-screen overflow-y-scroll">
          <Sider isCollapsed={false} />
        </div>
        <div className="flex-auto">
          <Header />
          <main>{children}</main>
          <Footer copyright="Copyright © 2022 Tosslate Inc." />
        </div>
      </div>
    </Layout>
  )
}
