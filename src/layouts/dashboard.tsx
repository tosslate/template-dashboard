import type { LayoutProps } from './default'
import { Layout } from './default'
import { Sider } from '../components/sider'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import layout from '../styles/scoped/layout.module.css'

export function Dashboard({ page, children }: LayoutProps) {
  return (
    <Layout page={page}>
      <div className="flex">
        <Sider isCollapsed={true} />
        <div className={layout.page}>
          <Header isCollapsed={false} />
          <main className={layout.content}>{children}</main>
          <Footer copyright="Copyright © 2022 Tosslate Inc." />
        </div>
      </div>
    </Layout>
  )
}
