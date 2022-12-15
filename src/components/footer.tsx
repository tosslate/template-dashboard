import type { ReactNode } from 'react'
import { Typography } from 'antd'

interface FooterProps {
  copyright: string | ReactNode
}

export function Footer({ copyright }: FooterProps) {
  return (
    <footer className="flex items-center justify-center h-16">
      <Typography.Text type="secondary">{copyright}</Typography.Text>
    </footer>
  )
}
