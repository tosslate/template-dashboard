import { HeaderDropdown } from './header-dropdown'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import header from '../styles/scoped/header.module.css'
import { Input } from 'antd'

interface HeaderProps {
  isCollapsed?: boolean
}

export function Header({ isCollapsed = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-white/95 backdrop-blur h-16">
      <div className="flex items-center justify-between h-full">
        <div className="pl-6">
          <Input
            className={header.search}
            suffix={<MagnifyingGlassIcon className="w-5 h-5" />}
          />
        </div>
        <div className="pr-6">
          <HeaderDropdown />
        </div>
      </div>
    </header>
  )
}
