import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet'

export interface LayoutProps {
  page: Record<string, any>
  children: ReactNode
}

export function Layout({ page, children }: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>{page?.title}</title>
      </Helmet>
      <div className="min-h-screen bg-stone-100">{children}</div>
    </>
  )
}
