import type { ReactNode } from 'react'

interface CenterProps {
  children: ReactNode
  height: string
}

export function Center({ children, height }: CenterProps) {
  return (
    <div className="flex items-center justify-center" style={{ height }}>
      {children}
    </div>
  )
}
