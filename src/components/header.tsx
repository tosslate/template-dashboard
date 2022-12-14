import { HeaderDropdown } from './header-dropdown'

export function Header() {
  return (
    <header>
      <div className="flex items-center justify-between border-b border-stone-200 h-14">
        <div></div>
        <HeaderDropdown />
      </div>
    </header>
  )
}
