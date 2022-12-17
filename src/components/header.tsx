import { HeaderDropdown } from './header-dropdown'
import { Button } from '@douyinfe/semi-ui'
import { Input } from 'antd'
import {
  BellIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon
} from '@heroicons/react/24/outline'
import header from '../styles/scoped/header.module.css'

interface HeaderProps {
  isCollapsed?: boolean
}

export function Header({ isCollapsed = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-stone-50/95 backdrop-blur h-16">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center space-x-3 pl-6">
          <Input
            placeholder="搜索"
            className={header.search}
            suffix={<MagnifyingGlassIcon className="w-5 h-5" />}
          />
        </div>
        <div className="flex items-center space-x-3 pr-6">
          <Button icon={<BellIcon className="w-6 h-6" />} theme="borderless" />
          <Button
            icon={<Cog6ToothIcon className="w-6 h-6" />}
            theme="borderless"
          />
          <HeaderDropdown />
        </div>
      </div>
    </header>
  )
}
