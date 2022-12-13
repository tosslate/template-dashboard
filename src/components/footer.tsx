import type { ReactNode } from 'react'
import { Typography } from 'antd'
import { Center } from './center'

interface FooterProps {
  copyright: string | ReactNode
}

export function Footer({ copyright }: FooterProps) {
  return (
    <footer>
      <Center height="3.5rem">
        <Typography.Text type="secondary">{copyright}</Typography.Text>
      </Center>
    </footer>
  )
}
