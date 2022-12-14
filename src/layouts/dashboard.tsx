import type { LayoutProps } from './default'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Sider } from '../components/sider'
import { Layout } from './default'

export function Dashboard({ page, children }: LayoutProps) {
  return (
    <Layout page={page}>
      <div className="flex bg-white">
        <div className="bg-stone-100 h-screen overflow-y-auto">
          <Sider isCollapsed={false} />
        </div>
        <div className="flex-auto">
          <Header />
          <main>
            <div style={{ height: 'calc(100vh - 7rem)' }}>{children}</div>
          </main>
          <Footer copyright="Copyright © 2022 Tosslate Inc." />
        </div>
      </div>
    </Layout>
  )
}
