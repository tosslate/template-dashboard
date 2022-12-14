import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Divider, Typography } from 'antd'
import { IconSemiLogo } from '@douyinfe/semi-icons'

interface CardProps {
  title: string
  subTitle?: string
  children: ReactNode
  backText: string
  back?: string
}

export function Card({
  title,
  subTitle,
  children,
  backText,
  back = '/'
}: CardProps) {
  return (
    <div className="bg-white border border-stone-300 max-w-md px-8 md:px-12 py-12">
      <div className={`text-center ${subTitle ? 'mb-2' : 'mb-6'}`}>
        <h1 className="text-stone-900 text-4xl mb-3">
          <IconSemiLogo size="inherit" />
        </h1>
        <Typography.Title level={3}>{title}</Typography.Title>
        {subTitle && (
          <Typography.Text type="secondary">{subTitle}</Typography.Text>
        )}
      </div>
      {children}
      <div className="m-auto w-72">
        <Divider>
          <Link className="text-base text-stone-500" to={back}>
            {backText}
          </Link>
        </Divider>
      </div>
    </div>
  )
}
