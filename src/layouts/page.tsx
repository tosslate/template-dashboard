import type { LayoutProps } from './default'
import { Layout } from './default'

export function Page({ page, children }: LayoutProps) {
  return (
    <Layout page={page}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </Layout>
  )
}
