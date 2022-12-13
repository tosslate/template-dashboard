import type { ReactNode } from 'react'
import { Typography } from 'antd'

interface FooterProps {
  copyright: string | ReactNode
}

export function Footer({ copyright }: FooterProps) {
  return (
    <div className="flex justify-center">
      <Typography.Text type="secondary">{copyright}</Typography.Text>
    </div>
  )
}
