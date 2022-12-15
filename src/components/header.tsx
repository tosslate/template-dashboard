import { HeaderDropdown } from './header-dropdown'

interface HeaderProps {
  isCollapsed?: boolean
}

export function Header({ isCollapsed = false }: HeaderProps) {
  return (
    <header className="sticky top-0 border-b border-stone-300 h-16">
      <div className="flex items-center justify-between h-full">
        <div className=""></div>
        <HeaderDropdown />
      </div>
    </header>
  )
}
