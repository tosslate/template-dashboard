import type { LayoutProps } from './default'
import { DefaultLayout } from './default'

export function PageLayout({ page, children }: LayoutProps) {
  return (
    <DefaultLayout page={page}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </DefaultLayout>
  )
}
