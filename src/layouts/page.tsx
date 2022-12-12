import type { LayoutProps } from './default'
import { Layout } from './default'

export function PageLayout({ page, children }: LayoutProps) {
  return (
    <Layout page={page}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </Layout>
  )
}
